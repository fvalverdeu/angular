import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {InstructorModel, WorkshopInterface, WorkshopModel} from '@wkmg/commons/classes';
import {InstructorsService, WorkshopsService} from '@wkmg/commons/http';
import {WorkshopFormComponent} from '../../commons/components/workshop-form/workshop-form.component';
import {forkJoin} from 'rxjs';
import {FileFormComponent} from '../../commons/components/file-form/file-form.component';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {
  displayedColumns: string[] = ['poster', 'temary', 'date', 'start', 'end', 'name', 'instructorFullName', 'actions'];
  workshops: WorkshopModel[] = [];
  instructors: InstructorModel[] = [];
  dataSource: MatTableDataSource<WorkshopInterface> = new MatTableDataSource<WorkshopInterface>([]);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private instructorsHttp: InstructorsService,
    private workshopsHttp: WorkshopsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    forkJoin(
      this.workshopsHttp.getAll(),
      this.instructorsHttp.getAll()
    )
      .subscribe(
        (res) => {
          this.workshops = res[0];
          this.instructors = res[1];
          this.resetDataSource();
        },
        err => console.log(err),
      );
    /*
    this.workshopsHttp.getAll()
    .subscribe(
    (res) => {
        this.workshops = res;
        this.resetDataSource();
    },
      err => console.log(err),
    );

    this.instructorsHttp.getAll()
      .subscribe(
        (res) => {
          this.instructors = res;
          this.resetDataSource();
        },
        err => console.log(err),
      );
      */
  }

  openForm(workshop?: WorkshopInterface): void {
    const dialogRef = this.dialog.open(WorkshopFormComponent, {
      panelClass: 'modal-lg',
      data: {workshop, instructors: this.instructors}
    });

    dialogRef.afterClosed().subscribe((data?: WorkshopInterface) => {
      if (data) {
        data._id ? this.update(data) : this.create(data);
      }
    });
  }

  openFileForm(id, fieldName, validExtensions): void {
    const dialogRef = this.dialog.open(FileFormComponent, {
      width: '300px',
      data: {validExtensions}
    });

    dialogRef.afterClosed().subscribe((data?: File) => {
      if (data) {
        this.updateFile(id, data, fieldName);
      }
    });
  }

  create(data: WorkshopInterface) {
    this.workshopsHttp.create(data)
      .subscribe(
        res => {
          this.workshops.push(res);
          this.resetDataSource();
        },
        err => console.log(err)
      );
  }


  update(data: WorkshopInterface) {
    this.workshopsHttp.update(data)
      .subscribe(
        res => {
          const index = this.workshops.findIndex(item => item._id === data._id );
          this.workshops[index] = res;
          this.resetDataSource();
        },
        err => console.log(err)
      );
  }


  delete(data: WorkshopInterface) {
    this.workshopsHttp.delete(data._id)
      .subscribe(
        res => {
          const index = this.workshops.findIndex(item => item._id === data._id );
          this.workshops.splice(index, 1);
          this.resetDataSource();
        },
        err => console.log(err)
      );
  }

  updateFile(id, file, fieldName) {
    this.workshopsHttp.updateFile(id, file, fieldName)
      .subscribe(
        res => {
          const path = environment.API_URL + '/' + res[fieldName];
          const index = this.workshops.findIndex(item => item._id === id );
          this.workshops[index][fieldName] = path;
          this.resetDataSource();
        },
        err => console.log(err)
      );
  }


  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    filterValue = filterValue.trim().toLowerCase();
    const workshops = this.workshops.filter(workshop => {
      return (workshop.instructor.names.toLowerCase().includes(filterValue) ||
      workshop.instructor.lastNames.toLowerCase().includes(filterValue));
    });

    this.resetDataSource(filterValue ? workshops : null);
  }

  resetDataSource(workshops?) {
    this.dataSource = new MatTableDataSource<WorkshopInterface>(workshops ? workshops : this.workshops);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

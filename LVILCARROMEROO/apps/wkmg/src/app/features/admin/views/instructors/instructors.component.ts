import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {InstructorFormComponent} from '../../commons/components/instructor-form/instructor-form.component';
import {InstructorInterface} from '@wkmg/commons/classes';
import {InstructorsService} from '@wkmg/commons/http';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'names', 'lastNames', 'mail', 'actions'];
  instructors: InstructorInterface[] = [];
  dataSource: MatTableDataSource<InstructorInterface> = new MatTableDataSource<InstructorInterface>([]);

  constructor(
    private instructorsHttp: InstructorsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.instructorsHttp.getAll()
      .subscribe(
        instructors => {
          this.instructors = instructors;
          this.dataSource = new MatTableDataSource<InstructorInterface>(this.instructors);
        },
        err => console.log(err),
      );
  }

  openForm(instructor?: InstructorInterface): void {
    const dialogRef = this.dialog.open(InstructorFormComponent, {
      width: '350px',
      data: {instructor}
    });

    dialogRef.afterClosed().subscribe((data?: InstructorInterface) => {
      if (data) {
        data._id ? this.update(data) : this.create(data);
      }
    });
  }

  create(data: InstructorInterface) {
    this.instructorsHttp.create(data)
      .subscribe(
        res => {
          this.instructors.push(res);
          this.dataSource = new MatTableDataSource<InstructorInterface>(this.instructors);
        },
        err => console.log(err)
      );
  }


  update(data: InstructorInterface) {
    this.instructorsHttp.update(data)
      .subscribe(
        res => {
          const index = this.instructors.findIndex(item => item._id === data._id );
          this.instructors[index] = res;
          this.dataSource = new MatTableDataSource<InstructorInterface>(this.instructors);
        },
        err => console.log(err)
      );
  }


  delete(data: InstructorInterface) {
    this.instructorsHttp.delete(data._id)
      .subscribe(
        res => {
          const index = this.instructors.findIndex(item => item._id === data._id );
          this.instructors.splice(index, 1);
          this.dataSource = new MatTableDataSource<InstructorInterface>(this.instructors);
        },
        err => console.log(err)
      );
  }

}

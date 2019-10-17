import { Component, ViewChild, ElementRef, AfterViewInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/id/444/200/200';
  count = 0;
  namme: string;
  userName: string;
  private _customerName: string;
  @ViewChild('nameRef', {static: false}) nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if(value === 'FFVV') {
      alert('Welcome back FFVV');
    }
  }


  incrementCount(){
    this.count += 1;
  }

  greetVishwas(updatedValue) {
    this.userName = updatedValue;
    if(updatedValue === 'FFVV') {
      alert('Welcome back FFVV');
    }
  }
}

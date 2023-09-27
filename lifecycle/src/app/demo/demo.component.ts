import { Component, Input, OnInit, OnChanges,AfterContentInit,DoCheck,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit ,OnChanges,AfterContentInit,DoCheck,AfterContentChecked{



@Input() val:any="";


//not a life cycle hook
constructor(){
  console.log("--0 constructor-----");
  // console.log('0');

}

//onchange 1st
ngOnChanges(){
  console.log("--1 ngonchanges------");
  // console.log('1');

}
//oninit 2nd
ngOnInit(){
  console.log("--2 oninit-----");
  // console.log('2');
}
ngDoCheck(){
  console.log('--3 docheck------');
  // console.log('3');

}

ngAfterContentInit(){
  console.log('--4 AfterContentInit------');
  // console.log('4');
}
ngAfterContentChecked(){
  console.log('--5 Aftercontentchecked------');
  // console.log('5');
}
ngAfterViewInit(){
  console.log('--6 After view init------');
  // console.log('6');
}
ngAfterViewChecked(){
  console.log('--7 After view Checked------');
  // console.log('7');
}

ngOnDestroy(){
  console.log('--8 After view Checked------');
  // console.log('8');
}

}

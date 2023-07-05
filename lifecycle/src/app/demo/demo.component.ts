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
  console.log("constructor-----");
  console.log('0');

}

//onchange 1st
ngOnChanges(){
  console.log("ngonchanges------");
  console.log('1');

}
//oninit 2nd
ngOnInit(){
  console.log("oninit-----");
  console.log('2');
}
ngDoCheck(){
  console.log('docheck------');
  console.log('3');

}

ngAfterContentInit(){
  console.log('AfterContentInit------');
  console.log('4');
}
ngAfterContentChecked(){
  console.log('Aftercontentchecked------');
  console.log('5');
}
ngAfterViewInit(){
  console.log('After view init------');
  console.log('6');
}
ngAfterViewChecked(){
  console.log('After view Checked------');
  console.log('7');
}

ngOnDestroy(){
  console.log('After view Checked------');
  console.log('8');
}

}

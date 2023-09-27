import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';

  val:string="hello";
onsubmit(value:HTMLInputElement){
 this.val=value.value;
}


//not a life cycle hook
constructor(){
  console.log("0 constructor from app-----");
  // console.log('0');

}

//onchange 1st
ngOnChanges(){
  console.log("1 ngonchanges from app------");
  // console.log('1');

}
//oninit 2nd
ngOnInit(){
  console.log("2 oninit from app-----");
  // console.log('2');
}
ngDoCheck(){
  console.log('3 docheck from app------');
  // console.log('3');

}

ngAfterContentInit(){
  console.log('4 AfterContentInit from app------');
  // console.log('4');
}
ngAfterContentChecked(){
  console.log('5 Aftercontentchecked from app------');
  // console.log('5');
}
ngAfterViewInit(){
  console.log('6 After view init from app------');
  // console.log('6');
}
ngAfterViewChecked(){
  console.log('7 After view Checked from app------');
  // console.log('7');
}

ngOnDestroy(){
  console.log('8 After view Checked from app------');
  // console.log('8');
}


}

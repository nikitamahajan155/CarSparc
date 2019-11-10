import { Component, ViewChild } from '@angular/core';
import { ViewchildComponent } from './viewchild.component';

@Component({
    selector: 'parent-comp',
    templateUrl: './parent.component.html'
})

export class ParentComponent{
orgName: string= 'Assimilate Technology'
@ViewChild(ViewchildComponent, {static:false}) Child = new ViewchildComponent();
childData:any
// childInfo:any
receiveInfo(data){
    this.childData= data;
    alert(JSON.stringify(data))
}

getViewChildinfo(){
    this.childData=this.Child.title
}
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html'
})

export class ChildComponent{
@Input() myOrgName: string='AT'

@Output() sendData=new EventEmitter()

publishInfo(){
    let data={
        name: 'Nikita',
        id: 1
    }
    this.sendData.emit(data)
}
}
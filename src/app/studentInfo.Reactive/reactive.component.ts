import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'reactive-comp',
    templateUrl: './reactive.component.html'
})

export class ReactiveComponent{
    public title: string= 'Reactive Form Demo'
    StudentInfo: FormGroup
    Constructor(){
        this.StudentInfo=new FormGroup({
            firstname: new FormControl('', [Validators.required]),
        
        })
    }

public StudentUser(data:any){
    console.log(JSON.stringify(data));
}
}
    
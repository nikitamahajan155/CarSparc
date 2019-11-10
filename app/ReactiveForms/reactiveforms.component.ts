import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: "react-comp",
    templateUrl: './reactiveforms.component.html',

})

export class ReactiveFormsComponent{
    public title:string = 'Reactive Form Demo'
loginModel: FormGroup
constructor(){
    this.loginModel=new FormGroup({
        FirstName: new FormControl('', [Validators.required]),
        LastName: new FormControl('', [Validators.required]),
        standard: new FormControl('', [Validators.required]),
        address: new FormGroup({
            country: new FormControl('', [Validators.required]),
            city:new FormControl('', [Validators.required]),
            Area:new FormControl('', [Validators.required]),
        })
    })
}
public LoginUser(data:any){
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data));
}


}
import { Component } from '@angular/core'

@Component ({
    selector: 'form-comp',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
})

export class FormsComponent{
    ishide:boolean= true
    public handleclick(){
        this.ishide=!this.ishide
    }
    ishidden:boolean= true
    public handleclick1(){
        this.ishidden=!this.ishidden
    }
    public LoginUser(data:any){
        console.log(JSON.stringify(data));
    }
}

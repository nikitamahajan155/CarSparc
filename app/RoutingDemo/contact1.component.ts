import {Component} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RoutingService } from './Service/routing.service';


@Component({
    selector: 'contact-app',
    templateUrl: './contact1.component.html',
    styleUrls: ['./contact1.component.scss'],
    providers: []
})

export class Contact1Component{
    


    loginModel: FormGroup
    contactinfo: any;
constructor(private cont: RoutingService){
    this.loginModel=new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        comment: new FormControl('', [Validators.required])
    })
}
public LoginUser(data:any){
    console.log(JSON.stringify(data));
    alert(JSON.stringify(data))
    
    this.cont.LoginUser(data).subscribe(
        res => { this.contactinfo = res },
            err => { this.contactinfo= err })
            alert(JSON.stringify(this.contactinfo))

}

}

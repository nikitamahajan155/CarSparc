import {Component} from '@angular/core'
import { UserService } from './user.service'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'user-comp',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    providers: [UserService]
})

export class UserComponent{

    constructor (private us: UserService){

    }

    public UserInfo: any

    public GetInfo(){
        this.us.GetAllUser().subscribe(
            res=> {this.UserInfo = res},
            err=> {this.UserInfo = err}
        )
    }

    public InsertData(){
        let Data= {
            id: 1,
            email: 'george.bluth@reqres.in',
            first_name: 'George',
            last_name: 'Bluth'
        }
        this.us.InsertData(Data).subscribe(
            res=> {this.UserInfo = res},
            err=> {this.UserInfo = err}
        )
    }

    }


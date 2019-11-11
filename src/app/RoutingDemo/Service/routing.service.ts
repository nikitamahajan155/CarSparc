import {Injectable, Component} from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable()


export class RoutingService{

constructor(private http: HttpClient){}



public LoginUser(data) {
    let url='https://reqres.in/api/users'
    return this.http.post(url,data)
    
}
}
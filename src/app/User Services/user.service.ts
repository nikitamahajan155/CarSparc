import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()

export class UserService{

    constructor(private ht: HttpClient){

    }
public GetAllUser(){

    return this.ht.get('https://reqres.in/api/users?page=2')

}

public InsertData(Data){
    return this.ht.post('https://reqres.in/api/users', Data)
}

}
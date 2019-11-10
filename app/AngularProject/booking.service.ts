import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBooking } from './booking';

@Injectable()

export class BookingService{
private url: string='https://localhost:44374/api/booking'
constructor (private http: HttpClient){}

// public BookingUser(data){
//     let url='https://localhost:44374/api/booking?Id=6';
//     return this.http.get(url,data)
// }
// }


getBookings(): Observable<IBooking[]>{
    return this.http.get<IBooking[]>(this.url);
}
}
import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'booking-comp',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
    providers: [BookingService]
})

export class BookingComponent{
//     BC: FormGroup
//     constructor(private bc1: BookingService){
//         this.BC= new FormGroup({
//             Id: new FormControl(),
//             CarType: new FormControl(),
//             ServiceType: new FormControl(),
//             Budget: new FormControl(),
//         })
//     }
// BCBooking:any

//     public BookingUser(data: any){
//         console.log(JSON.stringify(data));
//         //alert(JSON.stringify(data))

//         this.bc1.BookingUser(data).subscribe(
//             res=>{this.BCBooking=res},
//             err=>{this.BCBooking=err});
//             // alert(JSON.stringify(this.BCBooking))
//     }
// }

public booking=[];
constructor(private bs: BookingService){}
ngOnInit(){
    this.bs.getBookings().subscribe(data => this.booking = data);

}
}


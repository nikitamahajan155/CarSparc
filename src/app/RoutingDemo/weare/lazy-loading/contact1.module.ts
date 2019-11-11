import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { Contact1Component } from '../../contact1.component';


export const CustRoute: Routes=[
    {path: '', redirectTo: 'contact', pathMatch:'full'},
    { path: 'contact', component: Contact1Component},
]


@NgModule({
    declarations:[Contact1Component],
    imports:[RouterModule.forChild(CustRoute)],

    providers:[],
    exports: [Contact1Component]
})

export class Contact1Module{

}
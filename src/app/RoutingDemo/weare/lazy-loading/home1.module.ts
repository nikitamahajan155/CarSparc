import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from '../../home1.component';


export const CustRoute: Routes=[
    {path: '', redirectTo: './', pathMatch:'full'},
    { path: '', component: Home1Component},
]


@NgModule({
    declarations:[Home1Component],
    imports:[RouterModule.forRoot(CustRoute)],

    providers:[],
    exports: [Home1Component]
})

export class Home1Module{

}
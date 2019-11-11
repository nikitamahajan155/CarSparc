import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { About1Component } from '../../about1.component';


export const CustRoute: Routes=[
    
    {path: '', redirectTo: 'about', pathMatch:'full'},
    { path: 'about', component: About1Component}
]


@NgModule({
    declarations:[About1Component],
    imports:[RouterModule.forChild(CustRoute)],
    providers:[],
    exports: [About1Component]
})

export class About1Module{

}
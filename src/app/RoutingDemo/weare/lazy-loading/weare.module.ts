import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { WeareComponent } from '../../weare.component';
import { AIComponent } from '../ai.component';
import { ProductComponent } from '../product.component';
import { MobilityComponent } from '../mobility.component';
import { WebdevComponent } from '../webdev.component';
import { RouteDemo } from '../../routedemo.config';




export const CustRoute: Routes=[
    {path: '', redirectTo: 'weare', pathMatch:'full'},

    { path: 'weare', component: WeareComponent ,
    children:[
        {path: 'webdev', component: WebdevComponent},
        {path: 'product', component: ProductComponent},
        {path: 'ai', component: AIComponent},
        {path: 'mobility', component: MobilityComponent}
    ]
}
]


@NgModule({
    declarations:[WeareComponent, AIComponent, ProductComponent, MobilityComponent, WebdevComponent],
    imports:[RouterModule.forChild(CustRoute)],
    providers:[],
    exports: [WeareComponent, AIComponent, ProductComponent, MobilityComponent, WebdevComponent]
})

export class WeareModule{

}
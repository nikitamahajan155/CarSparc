import {Routes} from '@angular/router'
import { Home1Component } from './home1.component'
import { About1Component } from './about1.component'
import { WeareComponent } from './weare.component'
import { Contact1Component } from './contact1.component'
import { TrainingComponent } from './training.component'
import { WebdevComponent } from './weare/webdev.component'
import { ProductComponent } from './weare/product.component'
import { AIComponent } from './weare/ai.component'
import { MobilityComponent } from './weare/mobility.component'

export const RouteDemo : Routes = [
    { path: '', component: Home1Component},
    { path: 'about', component: About1Component},
    { path: 'contact', component: Contact1Component},
    {path: 'training', component:TrainingComponent},
    { path: 'weare', component:WeareComponent,  
    children:[
        {path: 'webdev', component: WebdevComponent},
        {path: 'product', component: ProductComponent},
        {path: 'ai', component: AIComponent},
        {path: 'mobility', component: MobilityComponent}]
    }
    
]
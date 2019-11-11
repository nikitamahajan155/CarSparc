import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from '../../training.component';



export const CustRoute: Routes=[
    {path: '', redirectTo: 'training', pathMatch:'full'},
    { path: 'training', component: TrainingComponent},
]


@NgModule({
    declarations:[TrainingComponent],
    imports:[RouterModule.forChild(CustRoute)],
    providers:[],
    exports: [TrainingComponent]
})

export class TrainingModule{

}
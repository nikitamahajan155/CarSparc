import { NgModule } from '@angular/core';
import { SignupComponent } from '../signup.component';
import { Routes, RouterModule } from '@angular/router';

export const signupRoute: Routes=[
    {path: '', redirectTo: 'signup', pathMatch:'full'},
    { path: 'signup', component: SignupComponent},
]

@NgModule({
    declarations:[SignupComponent],
    imports:[RouterModule.forChild(signupRoute)],
    providers:[],
    exports:[SignupComponent]
})

export class SignupModule{

}
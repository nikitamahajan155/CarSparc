import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArithmaticComponent } from './arithmatic.component';
// import { NaukriComponent } from './naukri.component';
import { GreettimePipe } from './greettime.pipe';
import { FormsComponent } from './forms.component';
// import { pipedemoComponent } from './PipeDemo/pipedemo.component';
// import { squarePipe } from './PipeDemo/pipedemo.pipe';
// import { CarwashComponent } from './AngularProject1/carwash.component';
// import { ReactiveComponent } from './studentInfo.Reactive/reactive.component';
import { ReactiveFormsComponent } from './ReactiveForms/reactiveforms.component';
import { StudentService } from './sevices/student.services';
// import { StudentComponent } from './student/student.component';
import { UserComponent } from './User Services/user.component';
// import { HomeComponent } from './User Services/Routing/route.homecomponent';
// import { AboutComponent } from './User Services/Routing/route.aboutcomponent';
// import { ContactComponent } from './User Services/Routing/route.contactcomponent';
// import { MasterComponent } from './User Services/Routing/route.mastercomponent';
import { RouterModule } from '@angular/router';
import { RouteDemo } from './RoutingDemo/routedemo.config';
import { MasterpageComponent } from './RoutingDemo/masterpage.component';
import { About1Component } from './RoutingDemo/about1.component';
import { Contact1Component } from './RoutingDemo/contact1.component';
import { TrainingComponent } from './RoutingDemo/training.component';
import { Home1Component } from './RoutingDemo/home1.component';
import { WeareComponent } from './RoutingDemo/weare.component';
import { AIComponent } from './RoutingDemo/weare/ai.component';
import { ProductComponent } from './RoutingDemo/weare/product.component';
import { MobilityComponent } from './RoutingDemo/weare/mobility.component';
import { WebdevComponent } from './RoutingDemo/weare/webdev.component';
import { RoutingService } from './RoutingDemo/Service/routing.service';
import { ParentComponent } from './ComponentCommunication/parent.component';
import { ChildComponent } from './ComponentCommunication/child.component';
import { ViewchildComponent } from './ComponentCommunication/viewchild.component';
import { CarmasterComponent } from './AngularProject/carmaster.component';
import { CarRoute } from './AngularProject/Routing/routecar.config';
import { DashboardComponent } from './AngularProject/dashboard.component';
import { BookingComponent } from './AngularProject/booking.component';
import { EditprofileComponent } from './AngularProject/editprofile.component';
import { ChangepwdComponent } from './AngularProject/changepwd.component';
import { ServiceloginService } from './AngularProject/servicelogin.service';
import { FrontpageComponent } from './AngularProject/frontpage.component';
import { SignupComponent } from './AngularProject/signup.component';
import { LoginComponent } from './AngularProject/login.component';
import { SignupbuttonComponent } from './AngularProject/signupbutton.component';
import { OtpComponent } from './AngularProject/otp.component';
import { ServiceloginComponent } from './AngularProject/servicelogin.component';
import { LoginModule } from './AngularProject/Lazy_loading/login.module';
import { SignupModule } from './AngularProject/Lazy_loading/signup.module';



@NgModule({
  declarations: [
    AppComponent,
    GreettimePipe,
   //  NaukriComponent,
    ArithmaticComponent,
    FormsComponent,
  ReactiveFormsComponent,
    // ReactiveComponent,
    // CarwashComponent,
    // pipedemoComponent,
    // squarePipe,
    // StudentComponent,
    // UserComponent,
    // CareerComponent,
    // LoginComponent,
    // MasterComponent,

    // About1Component,
    // Contact1Component,
    // TrainingComponent,
    // Home1Component,
    // WeareComponent,
    // AIComponent,
    // ProductComponent,
    // MobilityComponent,
    // WebdevComponent,
    // MasterpageComponent,
    // ParentComponent,
    // ChildComponent,
    // ViewchildComponent,
    //***********************
    // SignupComponent,
    CarmasterComponent,
    // LoginComponent,
    SignupbuttonComponent,
    OtpComponent,
    ServiceloginComponent,
    DashboardComponent,
    BookingComponent,
    EditprofileComponent,
    ChangepwdComponent,
    FrontpageComponent


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(RouteDemo),
    RouterModule.forRoot(CarRoute),
  
 
  ],
  providers: [], //RoutingService for Routing Demo project
  bootstrap: [CarmasterComponent]
})
export class AppModule { }

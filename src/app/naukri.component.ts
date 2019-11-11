import { Component,} from '@angular/core'



@Component ({
    selector: 'naukri-comp',
    templateUrl: './naukri.component.html',
    styleUrls: ['./naukri.component.scss']
})

export class NaukriComponent{
     ishide:boolean= true
    public handleclick(){
        this.ishide=!this.ishide
    }
    ishidden:boolean= true
    public handleclick1(){
        this.ishidden=!this.ishidden
    }

 public loginUser(data:any){
     console.log(JSON.stringify(data));
 }
  
      
    
}

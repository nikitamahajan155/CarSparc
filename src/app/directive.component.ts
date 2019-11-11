import { Component } from '@angular/core'

@Component({
    selector:'dir-app',
    templateUrl: './directive.component.html'

})

export class DirectiveComponent{
    title: string= "Directive Demo"
     myStyle: any = {color:'red'}
     style1: any = { background: 'grey'}
     
     student: any = [{name:'Nikita', RollNo: 1, City: 'Pune'  },
                    {name: 'Swati', RollNo: 2, City: 'Nashik'},
                    {name: 'Madhavi', RollNo: 3, City: 'Jalgaon'}]
    name: any = ['nikita','madhavi','prachi','swati']
     ishide:boolean= false
public handleclick(){
    this.myStyle={color: 'blue', background: 'lavender'}
}
toggle(){
    this.ishide=!this.ishide
}
ishidden:boolean=true
toggle2(){
    this.ishidden=!this.ishidden
}

}
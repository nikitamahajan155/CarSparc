import { Component } from '@angular/core'

@Component ({
    selector: 'arith-comp',
    templateUrl: './arithmatic.component.html'
})

export class ArithmaticComponent{
   public A;
    public B;
    res:number;


    public Addition() {
        this.res=(this.A)+ (this.B)
        }
    public Substraction() {
        this.res=this.A-this.B
        }
        public Multiplication() {
            this.res=this.A*this.B
            }
            public Division() {
                this.res=this.A/this.B
                }
}
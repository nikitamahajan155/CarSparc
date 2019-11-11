import { Component } from '@angular/core';
import { StudentService } from '../sevices/student.services';


@Component({
    selector : 'app-student',
    templateUrl : './student.component.html'
})

export class StudentComponent{

    name: string = 'Angular services Demo';

public student:any;

    constructor (private st: StudentService){

    }

    public MyStudentInfo(){
        this.student = this.st.GetStudentInfo()
    }

}
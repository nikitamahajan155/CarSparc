import { Injectable } from '@angular/core'

@Injectable()

export class StudentService {

    public studentInfo = [{ name: 'Nikita', city: 'Pune' }, { name: 'Swati', city: 'Nashik' }]

    public GetStudentInfo() {

        return this.studentInfo;

    }
   
}
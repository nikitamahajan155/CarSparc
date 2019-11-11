import {Pipe, PipeTransform} from '@angular/core'
import { HttpHandler } from '@angular/common/http';


@Pipe({
    name:'greet',
})

export class GreettimePipe implements PipeTransform{

    transform(value: any) {
        
     
}
}

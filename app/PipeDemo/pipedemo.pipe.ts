import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name: 'square',
})

export class squarePipe implements PipeTransform{
    transform(val: number)
    {
   

    }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:any[], search:string): any[] {
    return product.filter((x)=>x.category.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ) ;
  }

}

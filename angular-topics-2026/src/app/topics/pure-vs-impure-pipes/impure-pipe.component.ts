import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureFilter',
  standalone: true,
  pure: false,
})
export class ImpureFilterPipe implements PipeTransform {
  transform(items: string[], search: string): string[] {
    console.log('Impure pipe executed');
    if (!search) return items;
    return items.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }
}

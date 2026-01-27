import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureFilter',
  standalone: true,
})
export class PureFilterPipe implements PipeTransform {
  transform(items: string[], search: string): string[] {
    console.log('Pure pipe executed');

    if (!search) return items;

    // Only filter if search changes something
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

    // If filtered array is exactly same as original → return original reference
    const isSame =
      filtered.length === items.length &&
      filtered.every((val, index) => val === items[index]);

    return isSame ? items : filtered;
  }
}

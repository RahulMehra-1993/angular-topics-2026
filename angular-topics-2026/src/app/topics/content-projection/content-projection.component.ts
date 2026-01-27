import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css'],
  imports: [ChildComponent],
})
export class ContentProjectionComponent {}


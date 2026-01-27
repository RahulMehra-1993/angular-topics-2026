import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewencapsulation',
  standalone: true,
  templateUrl: './viewencapsulation.component.html',
  styleUrls: ['./viewencapsulation.component.css'],
   // Change this to Emulated / None / ShadowDom to see the effect
  encapsulation: ViewEncapsulation.Emulated,
  imports: [CommonModule]
})
export class ViewencapsulationComponent {
 // For demo, we can toggle a color class to see effect
  highlight = true;

  toggleHighlight() {
    this.highlight = !this.highlight;
  }

}


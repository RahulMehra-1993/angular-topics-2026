import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { RainbowDirective } from './rainbow.directive';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [HighlightDirective, UnlessDirective, RainbowDirective],
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent {
  showContent = false;

  get toggleButtonText(): string {
    return this.showContent ? 'Hide' : 'Show';
  }
}


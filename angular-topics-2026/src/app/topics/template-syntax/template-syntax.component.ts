import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent {
  // For interpolation examples
  title = 'Angular Template Syntax';
  currentTime = new Date();
  user: { name: string; age: number; details: { address: string } } | null = { name: 'John Doe', age: 30, details: { address: '123 Main St' } };

  // For property binding
  isDisabled = false;
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  buttonText = 'Click me';

  // For event binding
  clickCount = 0;
  inputValue = '';

  // For two-way binding
  name = 'Angular Developer';

  // For structural directives
  showDetails = true;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedItem = 'Item 1';

  // For attribute directives
  isActive = true;
  customClass = 'highlight';

  // For pipes
  amount = 1234.56;
  birthday = new Date(1990, 5, 15);
  text = 'hello world';

  // Methods
  onButtonClick() {
    this.clickCount++;
  }

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  trackByIndex(index: number): number {
    return index;
  }
}


import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onpush-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="onpush-demo-card">
      <h4>OnPush Component Demo</h4>
      <p>Counter: <span class="highlight">{{ counter }}</span></p>
      <p>Message: <span class="highlight">{{ message }}</span></p>
      <p>Input Data: <span class="highlight">{{ inputData }}</span></p>
    </div>
  `,
  styles: [`
    .onpush-demo-card {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      padding: 20px;
      color: white;
      margin-bottom: 20px;
    }
    .onpush-demo-card h4 {
      margin: 0 0 15px 0;
      color: white;
    }
    .highlight {
      background: rgba(255, 255, 255, 0.2);
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }
    .btn {
      padding: 8px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      margin: 5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.2s ease;
    }
    .btn-primary {
      background: #3498db;
      color: white;
    }
    .btn-secondary {
      background: #95a5a6;
      color: white;
    }
    .btn-info {
      background: #17a2b8;
      color: white;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushDemoComponent {
  @Input() inputData = 'No input';

  counter = 0;
  message = 'Initial OnPush message';

  constructor(private cdr: ChangeDetectorRef) {}

  increment() {
    this.counter++;
    // This won't trigger change detection in OnPush
  }

  updateMessage() {
    this.message = `Updated at ${new Date().toLocaleTimeString()}`;
    // This won't trigger change detection in OnPush
  }

  triggerChangeDetection() {
    this.cdr.detectChanges();
  }
}
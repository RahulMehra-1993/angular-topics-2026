import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnPushDemoComponent } from './onpush-demo.component';

@Component({
  selector: 'app-change-detection-mechanism',
  standalone: true,
  imports: [CommonModule, OnPushDemoComponent],
  templateUrl: './change-detection-mechanism.component.html',
  styleUrls: ['./change-detection-mechanism.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionMechanismComponent implements OnInit, OnDestroy, DoCheck {
  // Basic properties for demonstration
  counter = 0;
  message = 'Initial message';
  currentTime = new Date();
  items = ['Item 1', 'Item 2', 'Item 3'];

  // Properties for OnPush demonstration
  onPushCounter = 0;
  onPushMessage = 'OnPush message';
  onPushItems = ['OnPush Item 1', 'OnPush Item 2'];

  // Change detection tracking
  changeDetectionCount = 0;
  lastChangeDetection = new Date();

  // Timer properties
  timer: any;
  timerValue = 0;

  // Async operation simulation
  asyncResult = 'No result yet';

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    // Start a timer to show automatic change detection
    this.startTimer();
  }

  ngDoCheck() {
    // This runs on every change detection cycle
    this.changeDetectionCount++;
    this.lastChangeDetection = new Date();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private startTimer() {
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.ngZone.run(() => {
          this.timerValue++;
          this.currentTime = new Date();
        });
      }, 1000);
    });
  }

  // Methods to trigger change detection
  incrementCounter() {
    this.counter++;
    this.message = `Counter incremented to ${this.counter}`;
  }

  updateMessage() {
    this.message = `Updated at ${new Date().toLocaleTimeString()}`;
  }

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  // OnPush demonstration
  onPushInputData = 'Initial input data';

  updateOnPushInput() {
    this.onPushInputData = `Updated input at ${new Date().toLocaleTimeString()}`;
  }

  // OnPush strategy methods (for demonstration in template)
  incrementOnPushCounter() {
    this.onPushCounter++;
  }

  updateOnPushMessage() {
    this.onPushMessage = `Updated at ${new Date().toLocaleTimeString()}`;
  }

  addOnPushItem() {
    this.onPushItems.push(`OnPush Item ${this.onPushItems.length + 1}`);
  }

  // Manual change detection
  triggerManualDetection() {
    this.cdr.detectChanges();
  }

  markForCheck() {
    this.cdr.markForCheck();
  }

  // Async operations
  simulateAsyncOperation() {
    this.asyncResult = 'Loading...';
    setTimeout(() => {
      this.asyncResult = `Async operation completed at ${new Date().toLocaleTimeString()}`;
    }, 2000);
  }

  // Zone.js demonstration
  runOutsideZone() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('This runs outside Angular zone');
        // This won't trigger change detection automatically
        this.ngZone.run(() => {
          this.message = 'Updated from outside zone';
        });
      }, 1000);
    });
  }

  // Performance demonstration
  heavyOperation() {
    console.time('Heavy operation');
    for (let i = 0; i < 1000000; i++) {
      // Simulate heavy computation
      Math.sqrt(i);
    }
    console.timeEnd('Heavy operation');
    this.message = 'Heavy operation completed';
  }
}


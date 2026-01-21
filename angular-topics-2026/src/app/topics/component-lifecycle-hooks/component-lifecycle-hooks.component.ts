import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface Hook {
  name: string;
  description: string;
  commonlyUsed: boolean;
  called: boolean;
  calledAt: number | null;
}

@Component({
  selector: 'app-component-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-lifecycle-hooks.component.html',
  styleUrl: './component-lifecycle-hooks.component.css',
})
export class ComponentLifecycleHooksComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  inputData: string = 'initial';
  @ViewChild('viewElement', { static: true }) viewElement!: ElementRef;

  logs: { message: string; timestamp: number }[] = [];
  private doCheckCount = 0;

  hooks: Hook[] = [
    {
      name: 'ngOnChanges',
      description: 'Called when input properties change. Useful for reacting to input changes.',
      commonlyUsed: true,
      called: false,
      calledAt: null,
    },
    {
      name: 'ngOnInit',
      description: 'Called once after component initialization. Ideal for setup logic.',
      commonlyUsed: true,
      called: false,
      calledAt: null,
    },
    {
      name: 'ngDoCheck',
      description: 'Called during every change detection cycle. Use for custom change detection.',
      commonlyUsed: false,
      called: false,
      calledAt: null,
    },
    {
      name: 'ngAfterContentInit',
      description: 'Called after content projection. Good for working with projected content.',
      commonlyUsed: false,
      called: false,
      calledAt: null,
    },
    {
      name: 'ngAfterContentChecked',
      description: 'Called after content checked in every cycle.',
      commonlyUsed: false,
      called: false,
      calledAt: null,
    },
    {
      name: 'ngAfterViewInit',
      description: 'Called after view initialization. Useful for DOM manipulation.',
      commonlyUsed: true,
      called: false,
      calledAt: null,
    },
    {
      name: 'ngAfterViewChecked',
      description: 'Called after view checked in every cycle.',
      commonlyUsed: false,
      called: false,
      calledAt: null,
    },
    {
      name: 'ngOnDestroy',
      description: 'Called before component destruction. Clean up subscriptions here.',
      commonlyUsed: true,
      called: false,
      calledAt: null,
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.addLog('ngOnChanges');
    this.setHookCalled('ngOnChanges');
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.addLog('ngOnInit');
    this.setHookCalled('ngOnInit');
    this.cdr.detectChanges();
  }

  ngDoCheck() {
    this.doCheckCount++;
    if (this.doCheckCount % 50 === 0) {
      // log every 50th to reduce spam
      this.addLog(`ngDoCheck (${this.doCheckCount})`);
      this.setHookCalled('ngDoCheck');
      this.cdr.detectChanges();
    }
  }

  ngAfterContentInit() {
    this.addLog('ngAfterContentInit');
    this.setHookCalled('ngAfterContentInit');
    this.cdr.detectChanges();
  }

  ngAfterContentChecked() {
    // Not logging to avoid spam
  }

  ngAfterViewInit() {
    this.addLog('ngAfterViewInit');
    this.setHookCalled('ngAfterViewInit');
    this.cdr.detectChanges();
  }

  ngAfterViewChecked() {
    // Not logging to avoid spam
  }

  ngOnDestroy() {
    this.addLog('ngOnDestroy');
    this.setHookCalled('ngOnDestroy');
    this.cdr.detectChanges();
  }

  private addLog(message: string) {
    this.logs.push({ message, timestamp: Date.now() });
  }

  private setHookCalled(hookName: string) {
    const hook = this.hooks.find((h) => h.name === hookName);
    if (hook) {
      hook.called = true;
      hook.calledAt = Date.now();
    }
  }

  changeInput() {
    const oldValue = this.inputData;
    this.inputData = 'changed at ' + new Date().toLocaleTimeString();
    const changes: SimpleChanges = {
      inputData: new SimpleChange(oldValue, this.inputData, false)
    };
    this.ngOnChanges(changes);
  }

  trackByFn(index: number, item: any) {
    return item.timestamp;
  }

  trackByHook(index: number, hook: any) {
    return hook.name;
  }

  trackByLog(index: number, log: any) {
    return log.timestamp;
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dashboard-container">
      <h1>Angular Learning Dashboard</h1>
      <div class="topics-grid">
        <a routerLink="/angular-architecture" class="topic-link">Angular architecture</a>
        <a routerLink="/angular-cli-commands" class="topic-link">Angular CLI commands</a>
        <a routerLink="/module-system" class="topic-link">Module system</a>
        <a routerLink="/standalone-components" class="topic-link">Standalone components</a>
        <a routerLink="/component-lifecycle-hooks" class="topic-link">Component lifecycle hooks</a>
        <a routerLink="/change-detection-mechanism" class="topic-link">Change detection mechanism</a>
        <a routerLink="/change-detection-strategies" class="topic-link">Change detection strategies (Default vs OnPush)</a>
        <a routerLink="/zone-js-role" class="topic-link">Zone.js role</a>
        <a routerLink="/ivy-compiler" class="topic-link">Ivy compiler</a>
        <a routerLink="/aot-vs-jit-compilation" class="topic-link">AOT vs JIT compilation</a>
        <a routerLink="/template-syntax" class="topic-link">Template syntax</a>
        <a routerLink="/interpolation" class="topic-link">Interpolation</a>
        <a routerLink="/property-binding" class="topic-link">Property binding</a>
        <a routerLink="/event-binding" class="topic-link">Event binding</a>
        <a routerLink="/two-way-binding" class="topic-link">Two-way binding</a>
        <a routerLink="/structural-directives" class="topic-link">Structural directives</a>
        <a routerLink="/attribute-directives" class="topic-link">Attribute directives</a>
        <a routerLink="/custom-directives" class="topic-link">Custom directives</a>
        <a routerLink="/pipes" class="topic-link">Pipes</a>
        <a routerLink="/pure-vs-impure-pipes" class="topic-link">Pure vs impure pipes</a>
        <a routerLink="/custom-pipes" class="topic-link">Custom pipes</a>
        <a routerLink="/viewencapsulation" class="topic-link">ViewEncapsulation</a>
        <a routerLink="/content-projection" class="topic-link">Content projection (ng-content)</a>
        <a routerLink="/dependency-injection-system" class="topic-link">Dependency injection system</a>
        <a routerLink="/provider-scopes" class="topic-link">Provider scopes</a>
        <a routerLink="/hierarchical-injectors" class="topic-link">Hierarchical injectors</a>
        <a routerLink="/services" class="topic-link">Services</a>
        <a routerLink="/httpclient" class="topic-link">HttpClient</a>
        <a routerLink="/interceptors" class="topic-link">Interceptors</a>
        <a routerLink="/error-handling-httpclient" class="topic-link">Error handling with HttpClient</a>
        <a routerLink="/rxjs-fundamentals" class="topic-link">RxJS fundamentals</a>
        <a routerLink="/observables-vs-promises" class="topic-link">Observables vs Promises</a>
        <a routerLink="/subjects" class="topic-link">Subjects</a>
        <a routerLink="/behaviorsubject" class="topic-link">BehaviorSubject</a>
        <a routerLink="/replaysubject" class="topic-link">ReplaySubject</a>
        <a routerLink="/async-pipe" class="topic-link">Async pipe</a>
        <a routerLink="/rxjs-operators" class="topic-link">RxJS operators (map, switchMap, mergeMap, concatMap)</a>
        <a routerLink="/subscription-management" class="topic-link">Subscription management</a>
        <a routerLink="/memory-leaks-angular" class="topic-link">Memory leaks in Angular</a>
        <a routerLink="/reactive-forms" class="topic-link">Reactive forms</a>
        <a routerLink="/template-driven-forms" class="topic-link">Template-driven forms</a>
        <a routerLink="/form-validation" class="topic-link">Form validation</a>
        <a routerLink="/custom-validators" class="topic-link">Custom validators</a>
        <a routerLink="/formarray" class="topic-link">FormArray</a>
        <a routerLink="/dynamic-forms" class="topic-link">Dynamic forms</a>
        <a routerLink="/controlvalueaccessor" class="topic-link">ControlValueAccessor</a>
        <a routerLink="/routing-module" class="topic-link">Routing module</a>
        <a routerLink="/lazy-loading-modules" class="topic-link">Lazy loading modules</a>
        <a routerLink="/standalone-route-configuration" class="topic-link">Standalone route configuration</a>
        <a routerLink="/route-guards" class="topic-link">Route guards</a>
        <a routerLink="/resolvers" class="topic-link">Resolvers</a>
        <a routerLink="/preloading-strategies" class="topic-link">Preloading strategies</a>
        <a routerLink="/nested-routing" class="topic-link">Nested routing</a>
        <a routerLink="/route-reuse-strategy" class="topic-link">Route reuse strategy</a>
        <a routerLink="/state-management-concepts" class="topic-link">State management concepts</a>
        <a routerLink="/ngrx-store" class="topic-link">NgRx Store</a>
        <a routerLink="/ngrx-effects" class="topic-link">NgRx Effects</a>
        <a routerLink="/ngrx-entity" class="topic-link">NgRx Entity</a>
        <a routerLink="/ngrx-selectors" class="topic-link">NgRx Selectors</a>
        <a routerLink="/redux-pattern-angular" class="topic-link">Redux pattern in Angular</a>
        <a routerLink="/signals" class="topic-link">Signals (Angular 16+)</a>
        <a routerLink="/computed-signals" class="topic-link">Computed signals</a>
        <a routerLink="/signal-vs-rxjs" class="topic-link">Signal vs RxJS</a>
        <a routerLink="/component-communication" class="topic-link">Component communication</a>
        <a routerLink="/input-output" class="topic-link">@Input / @Output</a>
        <a routerLink="/viewchild-contentchild" class="topic-link">ViewChild / ContentChild</a>
        <a routerLink="/hostlistener-hostbinding" class="topic-link">HostListener / HostBinding</a>
        <a routerLink="/change-detection-optimization" class="topic-link">Change detection optimization</a>
        <a routerLink="/trackby-ngfor" class="topic-link">TrackBy with ngFor</a>
        <a routerLink="/virtual-scrolling" class="topic-link">Virtual scrolling</a>
        <a routerLink="/angular-cdk" class="topic-link">Angular CDK</a>
        <a routerLink="/performance-optimization-techniques" class="topic-link">Performance optimization techniques</a>
        <a routerLink="/internationalization" class="topic-link">Internationalization (i18n)</a>
        <a routerLink="/security" class="topic-link">Security (XSS, CSRF)</a>
        <a routerLink="/domsanitizer" class="topic-link">DomSanitizer</a>
        <a routerLink="/environment-configuration" class="topic-link">Environment configuration</a>
        <a routerLink="/build-optimization" class="topic-link">Build optimization</a>
        <a routerLink="/differential-loading" class="topic-link">Differential loading</a>
        <a routerLink="/testing-jasmine" class="topic-link">Testing with Jasmine</a>
        <a routerLink="/karma-basics" class="topic-link">Karma basics</a>
        <a routerLink="/unit-testing-components" class="topic-link">Unit testing components</a>
        <a routerLink="/service-testing" class="topic-link">Service testing</a>
        <a routerLink="/mocking-httpclient" class="topic-link">Mocking HttpClient</a>
        <a routerLink="/e2e-testing-basics" class="topic-link">E2E testing basics</a>
        <a routerLink="/accessibility" class="topic-link">Accessibility (a11y)</a>
        <a routerLink="/angular-material" class="topic-link">Angular Material</a>
        <a routerLink="/custom-theming" class="topic-link">Custom theming</a>
        <a routerLink="/monorepo-basics" class="topic-link">Monorepo basics (Nx)</a>
        <a routerLink="/micro-frontend-basics" class="topic-link">Micro-frontend basics</a>
        <a routerLink="/folder-structure-best-practices" class="topic-link">Folder structure best practices</a>
        <a routerLink="/feature-based-architecture" class="topic-link">Feature-based architecture</a>
        <a routerLink="/ssr-angular-universal" class="topic-link">SSR with Angular Universal</a>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #dd0031 0%, #c3002f 50%, #ffffff 100%);
      background-attachment: fixed;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      margin-bottom: 40px;
      font-size: 2.5rem;
      text-align: center;
    }

    .topics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      max-width: 1200px;
      width: 100%;
    }

    .topic-link {
      display: block;
      background: rgba(255, 255, 255, 0.9);
      color: #dd0031;
      text-decoration: none;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
      font-weight: 500;
    }

    .topic-link:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
      background: rgba(255, 255, 255, 1);
    }
  `]
})
export class DashboardComponent {}
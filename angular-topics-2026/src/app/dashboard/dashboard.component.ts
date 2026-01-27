import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Topic {
  name: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent {
  searchTerm = signal('');

  topics: Topic[] = [
    { name: 'Angular architecture', route: '/angular-architecture' },
    { name: 'Angular CLI commands', route: '/angular-cli-commands' },
    { name: 'Module system', route: '/module-system' },
    { name: 'Standalone components', route: '/standalone-components' },
    { name: 'Component lifecycle hooks', route: '/component-lifecycle-hooks' },
    { name: 'Change detection mechanism', route: '/change-detection-mechanism' },
    { name: 'Zone.js role', route: '/zone-js-role' },
    { name: 'Ivy compiler', route: '/ivy-compiler' },
    { name: 'AOT vs JIT compilation', route: '/aot-vs-jit-compilation' },
    { name: 'Template syntax', route: '/template-syntax' },
    { name: 'Custom directives', route: '/custom-directives' },
    { name: 'Pure vs impure pipes', route: '/pure-vs-impure-pipes' },
    { name: 'Custom pipes', route: '/custom-pipes' },
    { name: 'ViewEncapsulation', route: '/viewencapsulation' },
    { name: 'Content projection (ng-content)', route: '/content-projection' },
    { name: 'Dependency injection system', route: '/dependency-injection-system' },
    { name: 'Provider scopes', route: '/provider-scopes' },
    { name: 'Hierarchical injectors', route: '/hierarchical-injectors' },
    { name: 'Services', route: '/services' },
    { name: 'HttpClient', route: '/httpclient' },
    { name: 'Interceptors', route: '/interceptors' },
    { name: 'Error handling with HttpClient', route: '/error-handling-httpclient' },
    { name: 'RxJS fundamentals', route: '/rxjs-fundamentals' },
    { name: 'Observables vs Promises', route: '/observables-vs-promises' },
    { name: 'Subjects', route: '/subjects' },
    { name: 'BehaviorSubject', route: '/behaviorsubject' },
    { name: 'ReplaySubject', route: '/replaysubject' },
    { name: 'Async pipe', route: '/async-pipe' },
    { name: 'RxJS operators (map, switchMap, mergeMap, concatMap)', route: '/rxjs-operators' },
    { name: 'Subscription management', route: '/subscription-management' },
    { name: 'Memory leaks in Angular', route: '/memory-leaks-angular' },
    { name: 'Reactive forms', route: '/reactive-forms' },
    { name: 'Template-driven forms', route: '/template-driven-forms' },
    { name: 'Form validation', route: '/form-validation' },
    { name: 'Custom validators', route: '/custom-validators' },
    { name: 'FormArray', route: '/formarray' },
    { name: 'Dynamic forms', route: '/dynamic-forms' },
    { name: 'ControlValueAccessor', route: '/controlvalueaccessor' },
    { name: 'Routing module', route: '/routing-module' },
    { name: 'Lazy loading modules', route: '/lazy-loading-modules' },
    { name: 'Standalone route configuration', route: '/standalone-route-configuration' },
    { name: 'Route guards', route: '/route-guards' },
    { name: 'Resolvers', route: '/resolvers' },
    { name: 'Preloading strategies', route: '/preloading-strategies' },
    { name: 'Nested routing', route: '/nested-routing' },
    { name: 'Route reuse strategy', route: '/route-reuse-strategy' },
    { name: 'State management concepts', route: '/state-management-concepts' },
    { name: 'NgRx Store', route: '/ngrx-store' },
    { name: 'NgRx Effects', route: '/ngrx-effects' },
    { name: 'NgRx Entity', route: '/ngrx-entity' },
    { name: 'NgRx Selectors', route: '/ngrx-selectors' },
    { name: 'Redux pattern in Angular', route: '/redux-pattern-angular' },
    { name: 'Signals (Angular 16+)', route: '/signals' },
    { name: 'Computed signals', route: '/computed-signals' },
    { name: 'Signal vs RxJS', route: '/signal-vs-rxjs' },
    { name: 'Component communication', route: '/component-communication' },
    { name: '@Input / @Output', route: '/input-output' },
    { name: 'ViewChild / ContentChild', route: '/viewchild-contentchild' },
    { name: 'HostListener / HostBinding', route: '/hostlistener-hostbinding' },
    { name: 'Change detection optimization', route: '/change-detection-optimization' },
    { name: 'TrackBy with ngFor', route: '/trackby-ngfor' },
    { name: 'Virtual scrolling', route: '/virtual-scrolling' },
    { name: 'Angular CDK', route: '/angular-cdk' },
    { name: 'Performance optimization techniques', route: '/performance-optimization-techniques' },
    { name: 'Internationalization (i18n)', route: '/internationalization' },
    { name: 'Security (XSS, CSRF)', route: '/security' },
    { name: 'DomSanitizer', route: '/domsanitizer' },
    { name: 'Environment configuration', route: '/environment-configuration' },
    { name: 'Build optimization', route: '/build-optimization' },
    { name: 'Differential loading', route: '/differential-loading' },
    { name: 'Testing with Jasmine', route: '/testing-jasmine' },
    { name: 'Karma basics', route: '/karma-basics' },
    { name: 'Unit testing components', route: '/unit-testing-components' },
    { name: 'Service testing', route: '/service-testing' },
    { name: 'Mocking HttpClient', route: '/mocking-httpclient' },
    { name: 'E2E testing basics', route: '/e2e-testing-basics' },
    { name: 'Accessibility (a11y)', route: '/accessibility' },
    { name: 'Angular Material', route: '/angular-material' },
    { name: 'Custom theming', route: '/custom-theming' },
    { name: 'Monorepo basics (Nx)', route: '/monorepo-basics' },
    { name: 'Micro-frontend basics', route: '/micro-frontend-basics' },
    { name: 'Folder structure best practices', route: '/folder-structure-best-practices' },
    { name: 'Feature-based architecture', route: '/feature-based-architecture' },
    { name: 'SSR with Angular Universal', route: '/ssr-angular-universal' },
  ];

  filteredTopics = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.topics;
    }
    return this.topics.filter(topic =>
      topic.name.toLowerCase().includes(term)
    );
  });
}

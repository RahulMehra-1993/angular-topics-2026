import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InjectableService {
  getServiceName(): string {
    return 'Injectable Service - Angular Dependency Injection System';
  }
}

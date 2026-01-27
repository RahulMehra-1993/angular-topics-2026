import { Component, OnInit } from '@angular/core';
import { InjectableService } from './injectable-service/injectable.service';

@Component({
  selector: 'app-dependency-injection-system',
  standalone: true,
  templateUrl: './dependency-injection-system.component.html',
  styleUrls: ['./dependency-injection-system.component.css'],
})
export class DependencyInjectionSystemComponent implements OnInit {
  constructor(private service: InjectableService) {}

  injectableData: string = '';

  ngOnInit(): void {
    this.injectableData = this.service.getServiceName();
  }
}

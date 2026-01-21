import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-angular-architecture',
  standalone: true,
  templateUrl: './angular-architecture.component.html',
  styleUrls: ['./angular-architecture.component.css'],
})
export class AngularArchitectureComponent implements AfterViewInit {
  @ViewChild('mermaidDiv', { static: true }) mermaidDiv!: ElementRef;

  ngAfterViewInit() {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        fontSize: '16px',
        primaryColor: '#ff6b6b',
        primaryTextColor: '#fff',
        primaryBorderColor: '#ff4757',
        lineColor: '#2f3542',
        sectionBkgColor: '#3742fa',
        altSectionBkgColor: '#ffa502',
        gridColor: '#ced6e0',
        tertiaryColor: '#f1f2f6',
      },
    });
    const element = this.mermaidDiv.nativeElement;
    element.style.width = '100%';
    element.style.minHeight = '500px';
    element.style.display = 'flex';
    element.style.justifyContent = 'center';
    const graphDefinition = `
      graph LR
        %% =========================
        %% Bootstrap Flow
        %% =========================
        A[index.html] --> B[main.ts]
        B --> C[bootstrapApplication]
        C --> D[AppComponent]

        %% =========================
        %% Application Layer
        %% =========================
        subgraph Application Layer
          D --> E[Feature Components]
          E --> F[Templates]
          E --> G[Application Services]
          E --> H[Router Usage]
          F <-->|Data Binding| E
        end

        %% =========================
        %% Platform / Infrastructure
        %% =========================
        subgraph Platform / Infrastructure Layer
          I[HttpClient]
          J[HTTP Interceptors]
          K[Angular Router]
        end

        %% =========================
        %% Angular Core
        %% =========================
        subgraph Angular Core
          L[Dependency Injection]
          M[Change Detection]
          N[Compiler AOT / JIT]
          O[Zone.js]
          P[Renderer]
        end

        %% =========================
        %% Browser Runtime
        %% =========================
        subgraph Browser Runtime
          Q[DOM]
          R[Events]
          S[Network APIs]
        end

        %% =========================
        %% Relationships
        %% =========================
        G --> I
        I --> J
        J --> S

        H --> K

        E --> L
        G --> L
        I --> L
        K --> L

        P --> Q
        O --> R


    `;
    mermaid.render('mermaid-svg', graphDefinition).then((result) => {
      element.innerHTML = result.svg;
    });
  }
}

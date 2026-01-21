import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-module-system',
  standalone: true,
  templateUrl: './module-system.component.html',
  styleUrls: ['./module-system.component.css']
})
export class ModuleSystemComponent implements AfterViewInit {
  @ViewChild('mermaidDiv1', { static: true }) mermaidDiv1!: ElementRef;
  @ViewChild('mermaidDiv2', { static: true }) mermaidDiv2!: ElementRef;
  @ViewChild('mermaidDiv3', { static: true }) mermaidDiv3!: ElementRef;

  ngAfterViewInit() {
    // Initialize Mermaid with proper configuration
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        fontSize: '14px',
        primaryColor: '#ff6b6b',
        primaryTextColor: '#fff',
        primaryBorderColor: '#ff4757',
        lineColor: '#2f3542',
        sectionBkgColor: '#3742fa',
        altSectionBkgColor: '#ffa502',
        gridColor: '#ced6e0',
        tertiaryColor: '#f1f2f6',
        // Gantt chart specific colors
        barBkgColor: '#4CAF50',
        barAltColor: '#2196F3',
        barHoverColor: '#FF9800',
        barActiveColor: '#9C27B0',
        gridColorAlt: '#e0e0e0',
        textColor: '#333333',
        sectionBkgColorAlt: '#f8f9fa',
        todayLineColor: '#FF5722',
        // Enhanced color palette for better visibility
        doneColor: '#4CAF50',
        activeColor: '#2196F3',
        critColor: '#FF5722',
        milestoneColor: '#9C27B0',
        noteColor: '#FF9800',
        taskColor: '#607D8B',
      },
      securityLevel: 'loose',
    });

    this.renderOldModuleDiagram();
    this.renderStandaloneDiagram();
    this.renderEvolutionDiagram();
  }

  private async renderOldModuleDiagram() {
    const element1 = this.mermaidDiv1!.nativeElement;
    element1.style.width = '100%';
    element1.style.minHeight = '400px';
    element1.style.display = 'flex';
    element1.style.justifyContent = 'center';

    const oldModuleGraph = `
      graph TD
        A["AppModule @NgModule"] --> B["declarations & Components, Directives, Pipes"]
        A --> C["imports & Other Modules"]
        A --> D["providers & Services"]
        A --> E["exports & Components for other modules"]
        A --> F["bootstrap Root Component"]

        B --> G["Component A"]
        B --> H["Component B"]
        C --> I["CommonModule"]
        C --> J["BrowserModule"]
        D --> K["Service A"]
        D --> L["Service B"]
    `;

    try {
      const result = await mermaid.render('old-module-diagram', oldModuleGraph);
      element1.innerHTML = result.svg;
    } catch (error) {
      console.error('Error rendering old module diagram:', error);
      element1.innerHTML = '<p>Error loading diagram</p>';
    }
  }

  private async renderStandaloneDiagram() {
    const element2 = this.mermaidDiv2!.nativeElement;
    element2.style.width = '100%';
    element2.style.minHeight = '400px';
    element2.style.display = 'flex';
    element2.style.justifyContent = 'center';

    const standaloneGraph = `
      graph TD
        A["Standalone Component\\nstandalone: true"] --> B["imports\\nDirect imports needed"]
        A --> C["providers\\nComponent-level providers"]
        A --> D["template\\nHTML template"]

        B --> E["CommonModule"]
        B --> F["Other Components"]
        B --> G["Directives"]
        B --> H["Pipes"]

        I["bootstrapApplication\\nNo NgModule needed"] --> A
    `;

    try {
      const result = await mermaid.render('standalone-diagram', standaloneGraph);
      element2.innerHTML = result.svg;
    } catch (error) {
      console.error('Error rendering standalone diagram:', error);
      element2.innerHTML = '<p>Error loading diagram</p>';
    }
  }

  private async renderEvolutionDiagram() {
    const element3 = this.mermaidDiv3!.nativeElement;
    element3.style.width = '100%';
    element3.style.minHeight = '300px';
    element3.style.display = 'flex';
    element3.style.justifyContent = 'center';

    // Using a gantt chart instead of timeline for better compatibility
    const evolutionGraph = `
      gantt
        title Angular Module System Evolution
        dateFormat YYYY-MM-DD
        axisFormat %Y

        section Angular 2-13
        NgModules Required     :done, ng2, 2016-09-14, 2021-06-15

        section Angular 14
        Standalone Components  :done, ng14, 2021-06-15, 2022-02-15

        section Angular 15-16
        Enhanced Features      :done, ng15, 2022-02-15, 2023-05-15

        section Angular 17+
        Standalone by Default  :active, ng17, 2023-05-15, 2026-01-21
    `;

    try {
      const result = await mermaid.render('evolution-diagram', evolutionGraph);
      element3.innerHTML = result.svg;
    } catch (error) {
      console.error('Error rendering evolution diagram:', error);
      // Fallback to a simple graph if gantt fails
      this.renderFallbackEvolutionDiagram();
    }
  }

  private async renderFallbackEvolutionDiagram() {
    const element3 = this.mermaidDiv3!.nativeElement;

    const fallbackGraph = `
      graph LR
        A["Angular 2-13\\nNgModules Required"] --> B["Angular 14\\nStandalone Introduced"]
        B --> C["Angular 15-16\\nEnhanced Features"]
        C --> D["Angular 17+\\nStandalone by Default"]

        A --> A1["Complex Modules"]
        A --> A2["Tree-shaking Limited"]

        B --> B1["Gradual Migration"]
        B --> B2["Direct Imports"]

        C --> C1["Better Tree-shaking"]
        C --> C2["Standalone Pipes"]

        D --> D1["Default Standalone"]
        D --> D2["Smaller Bundles"]
    `;

    try {
      const result = await mermaid.render('evolution-diagram-fallback', fallbackGraph);
      element3.innerHTML = result.svg;
    } catch (error) {
      console.error('Error rendering fallback diagram:', error);
      element3.innerHTML = '<p>Error loading evolution diagram</p>';
    }
  }
}

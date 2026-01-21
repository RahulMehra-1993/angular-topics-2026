import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CliCommand {
  command: string;
  description: string;
}

@Component({
  selector: 'app-angular-cli-commands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-cli-commands.component.html',
  styleUrls: ['./angular-cli-commands.component.css']
})
export class AngularCliCommandsComponent {
  cliCommands: CliCommand[] = [
    {
      command: 'ng new <project-name>',
      description: 'Creates a new Angular application with the specified name.'
    },
    {
      command: 'ng generate component <component-name>',
      description: 'Generates a new component with TypeScript, HTML, CSS, and test files.'
    },
    {
      command: 'ng generate service <service-name>',
      description: 'Creates a new service class for handling business logic.'
    },
    {
      command: 'ng generate module <module-name>',
      description: 'Generates a new module to organize application features.'
    },
    {
      command: 'ng serve',
      description: 'Builds and serves the application locally for development.'
    },
    {
      command: 'ng build',
      description: 'Compiles the application into an output directory for production.'
    },
    {
      command: 'ng test',
      description: 'Runs unit tests using Karma test runner.'
    },
    {
      command: 'ng e2e',
      description: 'Runs end-to-end tests using Protractor.'
    },
    {
      command: 'ng add <package-name>',
      description: 'Adds a package to the project and runs its installation schematic.'
    },
    {
      command: 'ng update',
      description: 'Updates Angular packages and their dependencies.'
    },
    {
      command: 'ng lint',
      description: 'Runs linting tools on Angular application code.'
    },
    {
      command: 'ng generate guard <guard-name>',
      description: 'Creates a new route guard for controlling navigation access.'
    },
    {
      command: 'ng generate pipe <pipe-name>',
      description: 'Generates a new custom pipe for data transformation.'
    },
    {
      command: 'ng generate directive <directive-name>',
      description: 'Creates a new directive for DOM manipulation.'
    },
    {
      command: 'ng generate interface <interface-name>',
      description: 'Generates a new TypeScript interface definition.'
    }
  ];
}

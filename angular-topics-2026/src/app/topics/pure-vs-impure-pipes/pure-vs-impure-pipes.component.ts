import { Component } from '@angular/core';
import { PureFilterPipe } from './pure-pipe.component';
import { ImpureFilterPipe } from './impure-pipe.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-pure-vs-impure-pipes',
  standalone: true,
  templateUrl: './pure-vs-impure-pipes.component.html',
  styleUrls: ['./pure-vs-impure-pipes.component.css'],
  imports: [PureFilterPipe, ImpureFilterPipe, CommonModule, FormsModule]
})
export class PureVsImpurePipesComponent {
  searchText = '';
  fruits = ['Apple', 'Banana', 'Orange'];
  today = new Date();

  // Async pipe Observable example
  randomNumber$: Observable<number> = interval(1000).pipe(
    map(() => Math.floor(Math.random() * 100))
  );

  // Async pipe Promise example
  delayedMessage$: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('Hello from Promise after 3 seconds!'), 3000);
  });

  addFruit() {
    // Mutation → pure pipe will NOT run now
    this.fruits.push('Mango');
  }

  replaceFruitList() {
    // New array reference → pure pipe WILL run
    this.fruits = [...this.fruits, 'Grapes'];
  }
}

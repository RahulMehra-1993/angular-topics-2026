import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InjectableService } from './client-service/client.service';
import {  Posts } from './models';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-httpclient',
  standalone: true,
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css'],
  imports: [CommonModule, MatButton],
})
export class HttpclientComponent implements OnInit {
  posts: Posts[] = [];
  isLoading: boolean = false;

  constructor(
    private service: InjectableService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.isLoading = false;
  }

  getPosts(): void {
    this.isLoading = true;

    this.service.fetchPosts().subscribe({
      next: (data: Posts[]) => {
        this.posts = data;
        console.log('Fetched photos:', this.posts);
        this.isLoading = false; // ✅ move here
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching photos:', error);
        this.isLoading = false; // ✅ move here
        this.cdr.detectChanges();
      },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../models';

@Injectable({ providedIn: 'root' })
export class InjectableService {
  url: string = 'https://jsonplaceholder.typicode.com/users/1/posts';

  constructor(private client: HttpClient) {}

  fetchPosts() :Observable<Posts[]> {
    return this.client.get<Posts[]>(this.url);
  }
}

import { Thinking } from './../interfaces/thinking';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThinkingService {
  private readonly API = 'http://localhost:3000/thinking';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Thinking[]> {
    return this.http.get<Thinking[]>(this.API)
  }

  findById(id: number): Observable<Thinking> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thinking>(url)
  }

  create(thinking: Thinking): Observable<Thinking> {
    return this.http.post<Thinking>(this.API, thinking);
  }

  update(thinking: Thinking): Observable<Thinking> {
    const url = `${this.API}/${thinking.id}`;
    return this.http.put<Thinking>(url, thinking);
  }

  delete(id: number): Observable<Thinking> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thinking>(url);
  }
} 

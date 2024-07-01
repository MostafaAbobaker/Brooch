import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReturnData } from '../models/return-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:44390/api'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  private createHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('userToken');

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  get<T>(endpoint: string): Observable<ReturnData<T>> {
    return this.http.get<ReturnData<T>>(`${this.apiUrl}/${endpoint}`, { headers: this.createHeaders() });
  }

  post<T>(endpoint: string, data: any): Observable<ReturnData<T>> {
    return this.http.post<ReturnData<T>>(`${this.apiUrl}/${endpoint}`, data, { headers: this.createHeaders() });
  }

  put<T>(endpoint: string, data: any): Observable<ReturnData<T>> {
    return this.http.put<ReturnData<T>>(`${this.apiUrl}/${endpoint}`, data, { headers: this.createHeaders() });
  }

  delete<T>(endpoint: string): Observable<ReturnData<T>> {
    return this.http.delete<ReturnData<T>>(`${this.apiUrl}/${endpoint}`, { headers: this.createHeaders() });
  }
  
}

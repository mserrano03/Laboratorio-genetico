import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url:string = "http://localhost:5000/stats";
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http:HttpClient) { }

  getStats (): Observable<Report> {
    return this.http.get<Report>(this.url);
  }
}

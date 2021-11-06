import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sequence } from '../models/sequence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {
  url:string = "http://localhost:5000/mutation";
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  sequences: Sequence[] = [];
  constructor(private http:HttpClient) { }

  getSequences (): Observable<Sequence[]> {
    // return this.sequences;
    return this.http.get<Sequence[]>(this.url);
  }

  addSequence (sequence: Sequence): Observable<Sequence> {
    // this.sequences.unshift(sequence);
    return this.http.post<Sequence>(this.url, sequence, this.httpOptions);
  }
}

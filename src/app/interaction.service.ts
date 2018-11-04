import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource = new Subject<string>();
  teacherMessage$ = this._teacherMessageSource.asObservable();

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    return this._teacherMessageSource.next(message);
  }
}

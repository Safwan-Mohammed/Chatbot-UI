import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotResponseService {

  businessLogicURL : string = ''

  constructor(private http : HttpClient) {}

  fetchBotResponse(chatInput : string) : Observable<string> {
    return this.http.get<string>(`${this.businessLogicURL}/${chatInput}`)
  }
}

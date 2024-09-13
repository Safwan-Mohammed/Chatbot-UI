import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BotFeedbackService {

  businessLogicURL : string = ''

  constructor(private http : HttpClient) {}

  sendUserFeedback(userFeedback : {value : true | false | "none"}) : void {
    this.http.post(this.businessLogicURL, userFeedback);
  }
}

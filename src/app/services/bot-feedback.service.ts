import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import UserFeedback from '../Models/UserFeedbackModel';

@Injectable({
  providedIn: 'root'
})
export class BotFeedbackService {

  businessLogicURL : string = ''

  constructor(private http : HttpClient) {}

  sendUserFeedback(userFeedback : UserFeedback) : void {
    this.http.post(this.businessLogicURL, userFeedback);
  }
}

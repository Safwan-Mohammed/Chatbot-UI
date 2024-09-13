import { Component, Input} from '@angular/core';
import ChatModel from '../../Models/ChatModel'
import { ChatComponent } from '../chat/chat.component';
import { CommonModule } from '@angular/common';
import { BotResponseService } from '../../services/bot-response.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, ChatComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  chatArray : ChatModel[] = []
  @Input() chatInput! : string
  
  emptyChat : ChatModel = {type: '', message: ''}
  userChat : ChatModel = this.emptyChat
  botChat : ChatModel = this.emptyChat
  
  responseError : boolean = false
  constructor(private botResponseService : BotResponseService){}

  ngOnChanges() {
    if (this.chatInput && this.chatInput.length > 0) {
      const userChat: ChatModel = { type: "user", message: this.chatInput };
      this.chatArray.push(userChat);
  
      const botChat: ChatModel = this.emptyChat;
  
      // API Call to backend
      // this.botResponseService.fetchBotResponse(this.chatInput).subscribe({
      //   next: (response) => {
      //     botChat.message = response;
      //     botChat.type = "bot";
      //     this.chatArray.push(botChat);
      //     console.log("Inside next");
      //   },
      //   error: (error) => {
      //     botChat.message = "Error Generating Response. Please Try Again";
      //     botChat.type = "error";
      //     this.chatArray.push(botChat);
      //     this.responseError = true;
      //     console.log("Inside error");
      //   }
      // });
      
      botChat.message = "Yes Of Course!";
      botChat.type = "bot";
      this.chatArray.push(botChat);

      // Clear the user input for the next chat
      this.userChat = this.emptyChat;
      this.botChat = this.emptyChat;
    }
  }
  
  shouldShowFeedback(index: number): boolean {
    return this.chatArray.length > 1 && (index === this.chatArray.length - 1 || index === this.chatArray.length - 2);
  }
}

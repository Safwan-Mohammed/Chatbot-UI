import { Component, Input} from '@angular/core';
import ChatModel from '../../Models/ChatModel'
import { ChatComponent } from '../chat/chat.component';
import { CommonModule } from '@angular/common';

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
  
  userChat : ChatModel = { type : '', message : ''}
  botChat : ChatModel = { type : '', message : ''}
  
  ngOnChanges() : void{
      if(this.chatInput && this.chatInput.length > 0){
        this.userChat.type = "user"
        this.userChat.message = this.chatInput
        this.chatArray.push(this.userChat)

        //api call to backend
        this.botChat.type = "bot"
        this.botChat.message = "Yes, Of Course!"
        this.chatArray.push(this.botChat)
        
        this.userChat = { type : '', message : ''}
        this.botChat = { type : '', message : ''}
      }
  }
}

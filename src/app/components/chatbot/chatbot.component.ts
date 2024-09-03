import { Component, Input } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';
import { ContentComponent } from '../content/content.component';
import { TextAreaComponent } from '../text-area/text-area.component';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [MenubarComponent, ContentComponent, TextAreaComponent],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  chatInput! : string
  handleInput(input : string) : void{
    this.chatInput = input
  }
}

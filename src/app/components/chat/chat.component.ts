import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ThumbsUpIcon, ThumbsDownIcon} from 'lucide-angular';
import { BotFeedbackService } from '../../services/bot-feedback.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  readonly ThumbsUpIcon = ThumbsUpIcon
  readonly ThumbsDownIcon = ThumbsDownIcon
  @Input() chatType! : string
  @Input() message! : string

  constructor(private botFeedbackService : BotFeedbackService){}

  likeActive : boolean = false
  dislikeActive : boolean = false

  // Toggles the Like-State
  // Handles the case of switching from Dislike to Like
  // Makes an api call based on like value
  // If like and dislike both aren't selected, another api call is made

  toggleLike() : void{
    this.likeActive = !this.likeActive
    if(this.likeActive){
      this.botFeedbackService.sendUserFeedback({botResponse : this.message, value : true})
      if(this.dislikeActive) this.dislikeActive = !this.dislikeActive
    }
    if(!this.likeActive && !this.dislikeActive){
      this.botFeedbackService.sendUserFeedback({botResponse : this.message, value : "none"})      
    }
  }

  // Toggles the Dislike-State
  // Handles the case of switching from Like to DisLike
  // Makes an api call based on Disike value
  // If like and dislike both aren't selected, another api call is made

  toggleDisLike() : void{
    this.dislikeActive = !this.dislikeActive
    if(this.dislikeActive){
      this.botFeedbackService.sendUserFeedback({botResponse : this.message, value : false})
      if(this.likeActive) this.likeActive = !this.likeActive
    }
    if(!this.likeActive && !this.dislikeActive){
      this.botFeedbackService.sendUserFeedback({botResponse : this.message, value : "none"})      
    }
  }
  
}

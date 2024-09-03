import { Component, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, SendHorizontalIcon} from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.css'
})
export class TextAreaComponent {
  readonly SendHorizontalIcon = SendHorizontalIcon
  userInput! : string
  @Output() incomingInput = new EventEmitter<string>()

  sendInput() : void{
    this.incomingInput.emit(this.userInput)
    this.userInput = ''
  }
}

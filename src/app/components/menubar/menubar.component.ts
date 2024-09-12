import { Component } from '@angular/core';
import { LucideAngularModule, XIcon} from 'lucide-angular';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
    readonly XIcon = XIcon
    title : string = "SIEMENS"
}

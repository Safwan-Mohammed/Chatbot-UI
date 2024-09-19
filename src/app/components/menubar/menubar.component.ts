import { Component } from '@angular/core';
import { LucideAngularModule, XIcon} from 'lucide-angular';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [LucideAngularModule, DropdownMenuComponent],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
    readonly XIcon = XIcon
    title : string = "SIEMENS"
}

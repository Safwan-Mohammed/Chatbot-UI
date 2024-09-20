import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { LucideAngularModule, SettingsIcon} from 'lucide-angular';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, LucideAngularModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  
  readonly SettingsIcon = SettingsIcon
  private timeoutId: any
  isDropdownOpen = false

  onMouseEnter() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.isDropdownOpen = true, 100)
  }

  onMouseLeave() {
    clearTimeout(this.timeoutId);  
    this.timeoutId = setTimeout(() => this.isDropdownOpen = false, 300)
  }
}

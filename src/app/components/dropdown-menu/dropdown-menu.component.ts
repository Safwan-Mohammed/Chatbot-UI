import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, SettingsIcon, SunIcon, MoonIcon } from 'lucide-angular';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  
  private timeoutId: any
  readonly SettingsIcon = SettingsIcon
  readonly MoonIcon = MoonIcon
  readonly SunIcon = SunIcon
  isDropdownOpen = false

  toggleTheme(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
}



  onMouseEnter() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.isDropdownOpen = true, 100)
  }

  onMouseLeave() {
    clearTimeout(this.timeoutId);  
    this.timeoutId = setTimeout(() => this.isDropdownOpen = false, 300)
  }
}

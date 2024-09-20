import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, SettingsIcon, SunIcon, MoonIcon } from 'lucide-angular';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  readonly MoonIcon = MoonIcon
  readonly SunIcon = SunIcon

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
}

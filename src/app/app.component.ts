import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppToolbarComponent } from './shared/components/app-toolbar/app-toolbar.component';
import { NavSidebarComponent } from './shared/components/nav-sidebar/nav-sidebar.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, AppToolbarComponent, NavSidebarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	isMenuToggle = false;
	toggleMenu(event: Event) {
		this.isMenuToggle = !this.isMenuToggle;
	}
}

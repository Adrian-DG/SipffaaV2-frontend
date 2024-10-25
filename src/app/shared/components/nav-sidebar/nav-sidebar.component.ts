import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';

@Component({
	selector: 'app-nav-sidebar',
	standalone: true,
	imports: [SidebarModule],
	templateUrl: './nav-sidebar.component.html',
	styleUrl: './nav-sidebar.component.scss',
})
export class NavSidebarComponent {
	@Input() isVisible!: boolean;
}

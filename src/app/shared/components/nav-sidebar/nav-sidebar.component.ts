import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { IUrlOption } from '../../models/iurl-option.model';

@Component({
	selector: 'app-nav-sidebar',
	standalone: true,
	imports: [SidebarModule, MenuModule],
	templateUrl: './nav-sidebar.component.html',
	styleUrl: './nav-sidebar.component.scss',
})
export class NavSidebarComponent {
	@Input() isVisible!: boolean;
	@Input() modules!: IUrlOption[];
}

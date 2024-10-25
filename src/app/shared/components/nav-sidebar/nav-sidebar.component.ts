import { Component, Input, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { IUrlOption } from '../../models/iurl-option.model';
import { modules } from '../../../app.modules';
import { DividerModule } from 'primeng/divider';

@Component({
	selector: 'app-nav-sidebar',
	standalone: true,
	imports: [SidebarModule, MenuModule, DividerModule],
	templateUrl: './nav-sidebar.component.html',
	styleUrl: './nav-sidebar.component.scss',
})
export class NavSidebarComponent {
	@Input() isVisible!: boolean;
	modules: IUrlOption[] = modules;
}

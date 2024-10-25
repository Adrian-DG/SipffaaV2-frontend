import {
	Component,
	EventEmitter,
	Input,
	Output,
	WritableSignal,
} from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
	selector: 'app-toolbar',
	standalone: true,
	imports: [ToolbarModule, ButtonModule, AvatarModule, IconFieldModule],
	templateUrl: './app-toolbar.component.html',
	styleUrl: './app-toolbar.component.scss',
})
export class AppToolbarComponent {
	@Output('toggle') clickEvent = new EventEmitter();
	onClick() {
		this.clickEvent.emit();
	}
}

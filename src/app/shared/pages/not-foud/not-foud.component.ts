import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { PrimeIcons } from 'primeng/api';

@Component({
	selector: 'app-not-foud',
	standalone: true,
	imports: [ImageModule],
	templateUrl: './not-foud.component.html',
	styleUrl: './not-foud.component.scss',
})
export class NotFoudComponent {}

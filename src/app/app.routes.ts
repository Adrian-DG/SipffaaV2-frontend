import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'inspeccion-general',
		loadComponent: () =>
			import('./modules/inspeccion/pages/index/index.component').then(
				(c) => c.IndexComponent
			),
		loadChildren: () =>
			import('./modules/inspeccion/inspeccion.routes').then(
				(c) => c.InspeccionRoutes
			),
	},
	{
		path: '404',
		loadComponent: () =>
			import('./shared/pages/not-foud/not-foud.component').then(
				(c) => c.NotFoudComponent
			),
	},
	{
		path: '',
		redirectTo: 'inspeccion-general',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '404',
	},
];

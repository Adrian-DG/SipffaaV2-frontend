import { Route } from '@angular/router';

export const InspeccionRoutes: Route[] = [
	{
		path: 'listado',
		loadComponent: () =>
			import('./pages/index/index.component').then(
				(c) => c.IndexComponent
			),
	},
	{
		path: '',
		redirectTo: 'listado',
	},
];

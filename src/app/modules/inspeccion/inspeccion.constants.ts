import { IPermission } from '../../shared/models/ipermission.model';

// Permissions

export const P_INSPECTION_CREATE: IPermission = {
	key: 'INSPECTION_CREATE',
	name: 'Inspeccion - creacion de nuevas inspecciones',
};

// ------------------------ end of permissions section ------------------------- //

export const InspectionPermissions: any = {
	P_INSPECTION_CREATE,
};

export const InspectionPermissionsList = Object.keys(InspectionPermissions).map(
	(key) => {
		console.log(InspectionPermissions[key]);
		return InspectionPermissions[key];
	}
);

export const InspectionAclConfig = {
	key: 'Inspection',
	name: 'Inspeccion',
	permissions: InspectionPermissionsList,
};

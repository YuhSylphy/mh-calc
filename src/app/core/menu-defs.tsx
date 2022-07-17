import React from 'react';
import {
	Calculate as CalculateIcon,
	ChangeHistory as ChangeHistoryIcon,
} from '@mui/icons-material';

export type MenuItemDef =
	| PageMenuItemDef
	| NestMenuItemDef
	| DividerMenuItemDef;

export type NestMenuItemDef = {
	type: 'nest';
	icon: JSX.Element;
	label: string;
	children: MenuItemDef[];
};

export type PageMenuItemDef = {
	type: 'page';
	icon: JSX.Element;
	label: string;
	path: string;
	Page: React.ComponentType;
	title: string;
};

export type DividerMenuItemDef = {
	type: 'divider';
};
const divider: DividerMenuItemDef = {
	type: 'divider',
};

export const defaultRoute = '/damage-calc';
export const menuDefs: MenuItemDef[] = [
	{
		type: 'page',
		icon: <CalculateIcon />,
		label: 'ダメージ期待値計算機',
		path: '/damage-calc',
		Page: React.lazy(
			() =>
				import(
					/* webpackChunkName: "damage-calc" */ 'src/features/damage-calc/lazy'
				)
		),
		title: 'Damage Expectation Calculator: MHRS Tools',
	},
	divider,
	{
		type: 'page',
		icon: <ChangeHistoryIcon />,
		label: '変更履歴',
		path: '/change-log',
		Page: React.lazy(
			() =>
				import(
					/* webpackChunkName: "change-log" */ 'src/features/changelog/lazy'
				)
		),
		title: 'Change logs: MHRS Tools',
	},
];

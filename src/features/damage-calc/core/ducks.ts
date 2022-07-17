import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DamageCalcDef } from './fetch';

export type DamageCalcState = {
	defs: DamageCalcDef;
};

const damageCalcSlice = createSlice({
	name: 'damage-calc',
	initialState: {
		defs: {},
	} as DamageCalcState,
	reducers: {
		init: () => {},
		setDefs: (draft, action: PayloadAction<DamageCalcState['defs']>) => {
			draft.defs = action.payload;
		},
	},
});

export const { actions, reducer } = damageCalcSlice;
export type DamageCalcAction = ReturnType<typeof actions[keyof typeof actions]>;

import { combineEpics } from 'redux-observable';
import { filter } from 'rxjs/operators';

import type { Epic } from 'src/app';
import { withIndicator } from 'src/util';

import { damageCalcActions } from '..';
import { fetchDamageCalcDefs } from './fetch';

export const fetchDefsEpic: Epic = (action$) =>
	action$.pipe(
		filter(damageCalcActions.init.match),
		withIndicator('damageCalc/fetch', async () =>
			damageCalcActions.setDefs(await fetchDamageCalcDefs())
		)
	);

export const epic = combineEpics(fetchDefsEpic);

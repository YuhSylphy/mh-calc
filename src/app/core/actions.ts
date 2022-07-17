import type { CoreAction } from 'src/app/core/ducks';
import type { IndicatorAction } from 'src/features/indicator';
import type { ChangeLogAction } from 'src/features/changelog';
import type { DamageCalcAction } from 'src/features/damage-calc';

export type AppAction =
	| CoreAction
	| IndicatorAction
	| ChangeLogAction
	| DamageCalcAction;

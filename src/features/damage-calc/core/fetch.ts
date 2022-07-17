type JsonType = DamageCalcDef;

const dummy: DamageCalcDef = {};

export type DamageCalcDef = Record<string, unknown>;

export const fetchDamageCalcDefs = (): Promise<DamageCalcDef> =>
	fetch(`${process.env.PUBLIC_URL}/assets/damage-calc/defs.json`)
		.then((res) => res.json())
		.then((json: JsonType) => json)
		.catch((e) => ({ ...dummy, description: e }));

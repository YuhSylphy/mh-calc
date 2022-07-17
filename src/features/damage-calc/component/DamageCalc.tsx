import React, {
	Suspense,
	// useCallback,
	useEffect,
	useMemo,
	// useState,
} from 'react';

import {
	useAppDispatch,
	useAppSelector,
	// useValueWithMediaQuery,
} from 'src/util';

import { damageCalcActions } from '..';

function Loader() {
	return <div>Loading...</div>;
}

const useDamageCalcContainerHooks = () => {
	const dispatch = useAppDispatch();
	const { defs } = useAppSelector((state) => state.damageCalc);

	const loading = useMemo(() => !defs, []);

	useEffect(() => {
		if (loading) {
			dispatch(damageCalcActions.init());
		}
	}, [loading]);

	return { loading };
};

function DamageCalcContainer() {
	const { loading } = useDamageCalcContainerHooks();
	return loading ? <Loader /> : <React.Fragment />;
}

export function DamageCalc() {
	return (
		<Suspense fallback={<Loader />}>
			<DamageCalcContainer />
		</Suspense>
	);
}

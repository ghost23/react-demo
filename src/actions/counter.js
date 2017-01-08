/**
 * Created by mail on 06.01.2017.
 */

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export function increaseCounter(amount) {
	return { type: INCREASE_COUNTER, amount: amount !== undefined ? amount: 1 };
}

export function resetCounter() {
	return { type: RESET_COUNTER };
}
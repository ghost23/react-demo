/**
 * Created by mail on 06.01.2017.
 */

import { INCREASE_COUNTER, RESET_COUNTER } from '../actions/counter';

const DEFAULT_COUNTER = 0;

export function counter(state = DEFAULT_COUNTER, action) {

	switch(action.type) {
		case INCREASE_COUNTER: {
			return state + action.amount;
		}
		case RESET_COUNTER: {
			return 0;
		}
		default: {
			return state;
		}
	}
}
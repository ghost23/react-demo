/**
 * Created by mail on 01.11.2016.
 */
import { connect } from 'react-redux'
import Counter from '../views/components/counter';
import { increaseCounter, resetCounter } from '../actions/counter';

const mapStateToProps = (state) => {
	return {
		count: state.counter
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCount: (amount) => {
			dispatch(increaseCounter(amount));
		},
		onResetCounter: () => {
			dispatch(resetCounter());
		}
	};
};

const CounterController = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export default CounterController;
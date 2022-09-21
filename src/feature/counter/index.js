import { connect } from 'react-redux';
import { increment, decrement, incrementBy } from '../../store/counter/counter.slice';
import { bindActionCreators } from 'redux';

const ConterContainer = function({count, increment, decrement, incrementBy}) {
    return (
    <div>
      <div>Count : {count}</div>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => incrementBy(10)}>
          Increment By 10
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.value
    };
};

const mapDispatchToProps = {
    increment,
    decrement,
    incrementBy
}

const mapDispatchToPropsUsingBindActionCreators = (dispatch) => {
    return bindActionCreators({ increment, decrement, incrementBy}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToPropsUsingBindActionCreators)(ConterContainer);
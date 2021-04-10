import React from 'react';
import {connect } from 'react-redux';
import {increase, decrease} from '../modules/counter';
import Counter from '../components/Counter';
const CounterContainer = ({number, increase, decrease}) => {
    return(
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}
export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease
    }// 객체로 전달. => connect 함수가 내부적으로 bindActionCreators를 해줌.
)(CounterContainer);
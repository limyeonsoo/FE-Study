// 1. Action Type 정의.
// '모듈 이름 / 액션 이름' 으로 지정하면 다른 모듈과 이름의 충돌을 방지.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. Action 생성 함수 정의.
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

// 3. Reducer와 initial State
const initialState = {
    number : 0
}
function counter(state=initialState, action){
    switch(action.type){
        case INCREASE:
            return{
                number: state.number+1
            }
        case DECREASE:
            return{
                number: state.number-1
            }
        default:
            return state;
    }
}
export default counter;
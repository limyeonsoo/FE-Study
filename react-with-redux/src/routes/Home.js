import React, {useState} from 'react';
import ToDo from '../components/ToDo';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

function Home(props){
    
    const [text, setText] = useState("");
    
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        props.addToDo(text);
        setText("");
    }

    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
            </form>
            <ul>{props.toDos.map((todo) => <ToDo {...todo} key={todo.id}/> )}</ul>
        </>
    )
}

function mapStateToProps(state, ownProps){
    return {toDos:state};
}
function mapDispatchToProps(dispatch, ownProps){
    return{
        addToDo : text => dispatch(actionCreators.addToDo(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
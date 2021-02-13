import React from 'react';
import { actionCreators } from '../store';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function ToDo(props){
    return(
        <li>
            <Link to={`/${props.id}`}>
            {props.text}<button onClick={props.onBtnClick}>DEL</button>
            </Link>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps){
    return{
        onBtnClick : ()=>{dispatch(actionCreators.delToDo(ownProps.id))}
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
import React, {useState} from 'react';
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';

function Detail(props){
    return<>
        <h1>{props.toDos.text}</h1>;
        <h4>{props.toDos.id}</h4>
    </>
}

function mapStateToProps(state, ownProps){
    console.log(state);
    console.log(ownProps);
    const {
        match: {
            params:{id}
        }
    } = ownProps;
    return {toDos:state.find(todo=>todo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);
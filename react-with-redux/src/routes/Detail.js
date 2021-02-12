import React, {useState} from 'react';

function Detail(){
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        setText("");
    }
    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
            </form>
            <ul></ul>
        </>
    )
}

export default Detail;
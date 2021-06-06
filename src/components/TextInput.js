import React from 'react';
import './TextInput.css';

const TextInput = () => {
    return (
        <div>
            <form>
                <h1 className='title_title' style={{ marginLeft: '11px', color: 'black', fontFamily: "Dancing Script" }}>Instagram</h1>
                <input type='text'></input>
                <input type='text' style={{ display: 'block', marginTop: '2px' }}></input>
                <button className="form_button">Log in</button>
            </form>
        </div>
    )
}

export default TextInput;
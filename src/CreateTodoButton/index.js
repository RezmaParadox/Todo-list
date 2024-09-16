import './CreateTodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';
function CreateTodoButton(){

    const {openModal, setOpenModal} = React.useContext(TodoContext);

    return(
        <button className="CreateTodoButton"
                onClick={() =>{
                    // console.log('click');
                    // console.log(event);
                    // console.log(event.target);
                    setOpenModal(state => !state);
                }}>
            +
        </button>
    )
}

export {CreateTodoButton}
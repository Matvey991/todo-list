import React from 'react';
import Form from './Form/Form';

const Header = ({AddNewTodo}) => {

    return (
        <>
    <Form AddNewPost={AddNewTodo}/>
        </>
    );
};

export default Header;
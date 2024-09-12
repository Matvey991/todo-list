import React from 'react';
import Form from './Form/Form';

const Header = ({AddNewPost}) => {

    return (
        <>
    <Form AddNewPost={AddNewPost}/>
        </>
    );
};

export default Header;
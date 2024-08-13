import React from 'react';
import styles from './header.module.css'
import Form from './Form/Form';

const Header = ({AddNewPost}) => {

    return (
        <>
    <Form AddNewPost={AddNewPost}/>
        </>
    );
};

export default Header;
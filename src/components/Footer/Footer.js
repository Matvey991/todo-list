import React from 'react';
import styles from './footer.module.css'

const Footer = ({DeleteAllTodos}) => {
    return (
        <footer>
            <div className={styles.footerDeleteAllTodos}>
<button className={'btn btn-danger d-flex flex-column align-items-center'} onClick={() => DeleteAllTodos()}>
Удалить все
</button>
</div>
        </footer>
    );
};

export default Footer;
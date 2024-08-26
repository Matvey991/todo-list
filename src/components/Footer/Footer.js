import React from 'react';
import styles from './footer.module.css'

const Footer = ({DeleteAllTodos, todos}) => {
    return (
        <footer>
            <div className={styles.footerDeleteAllTodos}>
<button className={'btn btn-danger'} disabled={!todos.length} onClick={() => DeleteAllTodos()} >
Удалить все
</button>
</div>
        </footer>
    );
};

export default Footer;
import React, { useState } from 'react';
import Form from './Form/Form';
import { Modal } from '../Modal/Modal';

export const Header = ( {AddNewTodo} ) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <header className='d-flex justify-content-center'>
             <button onClick={openModal} type="submit" className="btn btn-primary">Open modal</button>
    <Modal closeHandler={closeModal} isOpen={isModalOpen}>
    <Form closeHandler={closeModal}  AddNewTodo={AddNewTodo} />
    </Modal>
        </header>
    );
};

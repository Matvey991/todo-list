import { createPortal } from 'react-dom'
import styles from './style.module.scss'
import { useEffect } from 'react'


export const ModalContent = ({children, closeHandler}) => {
    useEffect(() => {
        const listenerHandler = (e) => {
            if (e.key === 'Escape') {
                closeHandler()
        }
    }
        document.addEventListener('keydown', listenerHandler)
        
        return() => {
            document.removeEventListener('keydown', listenerHandler)
        }
    }, [closeHandler])
        return children
}


export const Modal = ({ closeHandler, isOpen, children }) => {

    if (!isOpen) return null

    return createPortal(
        <div className={styles.modalWr}>
            <ModalContent closeHandler={closeHandler}>
                {children}
            </ModalContent>
        </div>,
        document.getElementById('modal-root')
    )
}
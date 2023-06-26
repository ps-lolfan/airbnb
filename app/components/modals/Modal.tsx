import React from 'react'

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: string;
};

const Modal = () => {
    return (
        <div>Modal</div>
    )
}

export default Modal
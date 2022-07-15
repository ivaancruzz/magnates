import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalBase({statusModal, setStatusModal, contentModal}){
    return(
        <Modal show={statusModal} onHide={setStatusModal}>
            <Modal.Header closeButton>
                <Modal.Title>{contentModal.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {contentModal.body}
            </Modal.Body>
            { contentModal.footer != undefined && 
            <Modal.Footer>
                {contentModal.footer}
            </Modal.Footer>
            }
        </Modal>
    )
}
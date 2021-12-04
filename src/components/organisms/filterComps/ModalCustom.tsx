import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FormSubmit } from '../../atoms/formComps/FormSubmit';
import { SearchInfoButton } from '../../atoms/layoutComps/SearchInfoButton';

export const ModalCustom = (props: { value: string }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div
                onClick={handleShow}
                style={{
                    height: '0.1vh',
                    margin: 0,
                    padding: 0,
                    marginTop: '0.7vh',
                }}
            >
                <SearchInfoButton value={props.value} isSubmit={false} />
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.value}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Apply Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

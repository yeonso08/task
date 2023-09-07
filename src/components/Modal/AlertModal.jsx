import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AlertModal({ show, onHide, title, body, footerContent }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {footerContent || (
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;

import classes from "./Modal.module.css";
import { Button, Modal } from "react-bootstrap";

const MyModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <h4>Підтвердь дію</h4>
        <br />
        <p>
          Ти точно хочеш займатися з ментором{" "}
          <strong>{props.mentor.name}</strong> за{" "}
          <strong>{props.mentor.price}$</strong> за годину?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Закрити
        </Button>
        <Button variant="success" onClick={props.onConfirm}>
          Оплатити
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;

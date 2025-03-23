import React from "react";
import { Modal, Button } from "react-bootstrap";
import Win from "../../img/Win.gif";
import closeIcon from "../../img/goHome.png";
import styles from "./Modal.module.css";

export default function ModalWin({ open, onClose }) {
  return (
    <Modal show={open} centered dialogClassName={styles.modalDialog}>
      <Modal.Body className={styles.ImgContent}>
        <img src={Win} alt="You Win" />
      </Modal.Body>
      <Modal.Footer className={styles.footer}>
        <Button variant="secondary" onClick={onClose} className={styles.btn1}>
          <img src={closeIcon} alt="Cerrar" className={styles.icon} />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
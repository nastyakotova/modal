import Modal from './Modal';
import Content from './Content';
import { useState } from 'react';

export default function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="container">
        <button className="show-modal-button" onClick={() => setModalActive(true)}>Modal</button>
      </div>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
      >
        <Content setModalActive={setModalActive} />
      </Modal>
    </>
  );
}

import './App.scss';
import Modal from '../Modal/Modal';
import Content from '../Content/Content';
import { useState } from 'react';

export default function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="container">
        <button onClick={() => setModalActive(true)}>Modal</button>
      </div>
      <Modal 
        modalActive={modalActive}
        setModalActive={setModalActive}
      >
        <Content />
      </Modal>
    </>
  );
}

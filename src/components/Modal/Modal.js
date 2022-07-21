import'./Modal.scss';

export default function Modal({ modalActive, setModalActive, children }) {
  return (
    <div
      className={`modal ${modalActive ? 'active' : ''}`}
      onClick={() => setModalActive(false)}
    >
      <div
        className={`content ${modalActive ? 'active' : ''}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

import "./ModalWithForm.css";

function ModalWithForm({ name, title, children, buttonTextSubmit }) {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <h2 className="modal__header">{title}</h2>
        <button className="modal__close-btn"></button>
        <form action="submit">
          {children}
          <button className="modal__submit">{buttonTextSubmit}</button>
          {
            <button
              className="modal__switch-modal"
              type="button"
              onClick={onSwitchModal}
            >
              {buttonTextSwitch}
            </button>
          }
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

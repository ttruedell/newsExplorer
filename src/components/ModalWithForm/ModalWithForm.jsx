import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  name,
  title,
  children,
  buttonTextSubmit,
  buttonTextSwitch,
  onSwitchModal,
}) {
  return (
    <div
      className={`modal modal__type_${name}  ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content">
        <h2 className="modal__header">{title}</h2>
        <button
          className="modal__close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <form onSubmit={(e) => e.preventDefault()}>
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

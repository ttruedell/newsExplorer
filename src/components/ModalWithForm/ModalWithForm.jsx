import "./ModalWithForm.css";
import close from "../../assets/close.png";

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
        {/* <button className="modal__close-btn" type="button" onClick={onClose}> */}
        <img
          className="modal__close-btn"
          type="button"
          onClick={onClose}
          src={close}
          alt="close-btn"
        />
        {/* </button> */}
        <form onSubmit={(e) => e.preventDefault()}>
          {children}
          <button className="modal__submit">{buttonTextSubmit}</button>
          {
            <button className="modal__switch-modal" type="button">
              <pre className="modal__switch-text modal__switch-text_or">
                or{" "}
              </pre>
              <p
                className="modal__switch-text modal__switch-text_signin"
                onClick={onSwitchModal}
              >
                {buttonTextSwitch}
              </p>
            </button>
          }
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

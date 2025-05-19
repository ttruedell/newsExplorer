import "./ModalWithForm.css";
import close from "../../assets/close.svg";

function ModalWithForm({
  isOpen,
  onClose,
  name,
  title,
  children,
  buttonTextSubmit,
  buttonTextSwitch,
  onSwitchModal,
  isSubmitDisabled,
  onSubmit,
  showForm = true,
}) {
  return (
    <div
      className={`modal modal_type_${name}  ${isOpen ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      {/*  modal__content_${name}*/} {/* Removed className elements*/}
      {/*modal__header_${name}  */}
      <div className={`modal__content `}>
        <h2 className={`modal__header `}>{title}</h2>
        <img
          className="modal__close-btn"
          type="button"
          onClick={onClose}
          src={close}
          alt="close-btn"
        />
        {showForm ? (
          <form className="modal__form" onSubmit={onSubmit}>
            {children}
            <button
              className={`modal__submit modal__submit_type_${name} ${
                isSubmitDisabled ? "modal__submit_disabled" : ""
              }`}
              id="submit-btn"
              disabled={isSubmitDisabled}
              type="submit"
            >
              {buttonTextSubmit}
            </button>
            {buttonTextSwitch && (
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
            )}
          </form>
        ) : (
          <div className="modal__confirm">
            <button
              className="modal__sign-in"
              type="button"
              onClick={onSwitchModal}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalWithForm;

import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  handleCloseModal,
  onSwitchModal,
  validateEmail,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const isValid = validateEmail(email) && password;
    setIsSubmitDisabled(!isValid);
  }, [email, password]);

  //   useEffect(() => {
  //     if (validateEmail(email) && password) {
  //       setIsSubmitDisabled(false);
  //       document
  //         .getElementById("submit-btn")
  //         .classList.remove("modal__submit_disabled");
  //     } else {
  //       setIsSubmitDisabled(true);
  //       document
  //         .getElementById("submit-btn")
  //         .classList.add("modal__submit_disabled");
  //     }
  //   }, [email, password, validateEmail]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleCloseModal}
      name="SignInForm"
      title="Sign in"
      buttonTextSubmit="Sign in"
      buttonTextSwitch="Sign up"
      onSwitchModal={onSwitchModal}
      isSubmitDisabled={isSubmitDisabled}
    >
      <label className="modal__label">
        <p className="modal__input-header">Email</p>
        <input
          type="email"
          className="modal__input modal__input_email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__label">
        <p className="modal__input-header">Password</p>
        <input
          type="text"
          className="modal__input modal__input_password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          minLength="1"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;

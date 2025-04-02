import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ isOpen, handleCloseModal, onSwitchModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleCloseModal}
      name="SignInForm"
      title="Sign in"
      buttonTextSubmit="sign in"
      buttonTextSwitch="or Sign up"
      onSwitchModal={onSwitchModal}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="text"
          className="modal__input"
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

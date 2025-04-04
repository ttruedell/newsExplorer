import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  handleCloseModal,
  handleModalClick,
  onSwitchModal,
  validateEmail,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const isValid = validateEmail(email) && password && username;
    setIsSubmitDisabled(!isValid);
  }, [email, password, username]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleCloseModal}
      handleModalClick={handleModalClick}
      name="RegisterForm"
      title="Sign up"
      buttonTextSubmit="Sign up"
      buttonTextSwitch="Sign in"
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
          minLength="6"
          required
        />
      </label>
      <label className="modal__label">
        <p className="modal__input-header">Username</p>
        <input
          type="text"
          className="modal__input modal__input_username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          minLength="6"
          required
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;

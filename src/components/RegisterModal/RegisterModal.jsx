import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  handleCloseModal,
  onSwitchModal,
  validateEmail,
  handleRegister,
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  isSubmitDisabled,
  setIsSubmitDisabled,
  errors,
  setErrors,
}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value) ? "" : "Invalid email address",
    }));
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password:
        value.length >= 6 ? "" : "Password must be at least 6 characters long",
    }));
  };
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setErrors((prev) => ({
      ...prev,
      username:
        value.length >= 6 ? "" : "Username must be at least 6 characters long",
    }));
  };
  // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const isValid = validateEmail(email) && password && username;
    setIsSubmitDisabled(!isValid);
  }, [email, password, username]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
      setErrors("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleCloseModal}
      name="RegisterForm"
      title="Sign up"
      buttonTextSubmit="Sign up"
      buttonTextSwitch="Sign in"
      onSwitchModal={onSwitchModal}
      isSubmitDisabled={isSubmitDisabled}
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister({ username, email, password });
      }}
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
        {errors.email && <p className="modal__input-error">{errors.email}</p>}
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
        {errors.password && (
          <p className="modal__input-error">{errors.password}</p>
        )}
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
        {errors.username && (
          <p className="modal__input-error">{errors.username}</p>
        )}
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;

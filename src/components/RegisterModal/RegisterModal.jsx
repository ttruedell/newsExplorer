import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  setActiveModal,
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
  registeredEmails,
  emailTakenError,
  setEmailTakenError,
}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const isInvalidFormat = !validateEmail(value);
    const isTaken = registeredEmails.includes(value);

    setErrors((prev) => ({
      ...prev,
      email:
        value === ""
          ? "Email is required"
          : isInvalidFormat
          ? "Invalid email address"
          : "",
    }));
    if (!isInvalidFormat && isTaken) {
      setEmailTakenError("This email is already registered.");
    } else {
      setEmailTakenError("");
    }
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password:
        value === ""
          ? "Password is required"
          : value.length >= 6
          ? ""
          : "Password must be at least 6 characters long",
    }));
  };
  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setErrors((prev) => ({
      ...prev,
      username:
        value === ""
          ? "Username is required"
          : value.length >= 6
          ? ""
          : "Username must be at least 6 characters long",
    }));
  };

  useEffect(() => {
    const isValid =
      validateEmail(email) &&
      !registeredEmails.includes(email) &&
      password.length >= 6 &&
      username.length >= 6 &&
      !errors.email &&
      !errors.password &&
      !errors.username &&
      !emailTakenError;
    setIsSubmitDisabled(!isValid);
  }, [email, password, username, errors, emailTakenError, registeredEmails]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
      setErrors({ email: "", password: "", username: "" });
      setEmailTakenError("");
    }
  }, [isOpen]);

  // useEffect(() => {
  //   console.log("EMAIL TAKEN ERROR:", emailTakenError);
  // }, [emailTakenError]);

  // console.log("Validation re-check:", {
  //   emailTakenError,
  //   isSubmitDisabled,
  // });

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
        // setActiveModal("confirm-register");
      }}
      showForm={true}
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
      {emailTakenError && (
        <p className="modal__input-error modal__input-error_taken-email">
          {emailTakenError}
        </p>
      )}
    </ModalWithForm>
  );
};

export default RegisterModal;

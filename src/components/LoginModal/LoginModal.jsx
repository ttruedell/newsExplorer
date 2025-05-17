import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  handleCloseModal,
  onSwitchModal,
  validateEmail,
  handleLogin,
  email,
  setEmail,
  password,
  setPassword,
  isSubmitDisabled,
  setIsSubmitDisabled,
  errors,
  setErrors,
}) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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
  // const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Errors:", errors);

    const isValid =
      validateEmail(email) &&
      password.length >= 6 &&
      errors.email === "" &&
      errors.password === "";
    setIsSubmitDisabled(!isValid);
  }, [email, password, errors]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setErrors({ email: "", password: "" });
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleCloseModal}
      name="sign-in-form"
      title="Sign in"
      buttonTextSubmit="Sign in"
      buttonTextSwitch="Sign up"
      onSwitchModal={onSwitchModal}
      isSubmitDisabled={isSubmitDisabled}
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin({ email, password });
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
    </ModalWithForm>
  );
};

export default LoginModal;

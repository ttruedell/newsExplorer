import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ConfirmRegisterModal = ({
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
  //   useEffect(() => {
  //     if (!isOpen) {
  //       setEmail("");
  //       setPassword("");
  //       setErrors({ email: "", password: "" });
  //     }
  //   }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleCloseModal}
      name="RegisterConfirm"
      title=""
      buttonTextSubmit="Sign in"
      buttonTextSwitch=""
      onSwitchModal={onSwitchModal}
      isSubmitDisabled={false}
      onSubmit={(e) => {
        e.preventDefault();
        onSwitchModal();
      }}
    >
      <h1>Registration successfully completed!</h1>
    </ModalWithForm>
  );
};

export default ConfirmRegisterModal;

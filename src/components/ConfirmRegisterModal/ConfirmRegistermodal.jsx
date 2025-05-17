import ModalWithForm from "../ModalWithForm/ModalWithForm";

const ConfirmRegisterModal = ({ isOpen, handleCloseModal, onSwitchModal }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleCloseModal}
      name="register-confirm"
      title="Registration successfully completed!"
      onSwitchModal={onSwitchModal}
      isSubmitDisabled={false}
      onSubmit={(e) => {
        e.preventDefault();
        onSwitchModal();
      }}
      showForm={false}
    ></ModalWithForm>
  );
};

export default ConfirmRegisterModal;

import React from 'react';
import Modal from 'react-modal';

type Props = {
  blob: File;
};

const Blob: React.FC<Props> = (props) => {
  const { blob } = props;
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="File Modal">
        <img src={URL.createObjectURL(blob)} alt="File Preview" />

        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </>
  );
};

export default Blob;

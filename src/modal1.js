import React from 'react';

function ModalContent(props) {
  return (
    <div>
      <h2>첫번째 프로젝트</h2>
      <button onClick={props.closeModal}>Close Modal</button>
    </div>
  );
}

export default ModalContent;
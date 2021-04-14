import React from "react";
import { Modal } from "antd";
function CustomModal({
  title = "Basic Modal",
  visible = false,
  handleOk,
  handleCancel,
  content,
}) {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {content}
    </Modal>
  );
}

export default CustomModal;

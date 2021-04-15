import React from "react";
import { Modal } from "antd";

function CustomModal({
  title = "Basic Modal",
  visible = false,
  handleOk,
  handleCancel,
  component: Component,
}) {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Component handleOk={handleOk} onCancel={handleCancel} />{" "}
    </Modal>
  );
}

export default CustomModal;

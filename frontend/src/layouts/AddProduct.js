import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

function AddProduct({ handleOk, handleCancel }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form]);

  const onFinish = (values) => {
    console.log("Success:", values);
    handleOk();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Author"
        name="author"
        rules={[
          {
            required: true,
            message: "Please input author!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product{" "}
        </Button>{" "}
      </Form.Item>{" "}
    </Form>
  );
}

export default AddProduct;

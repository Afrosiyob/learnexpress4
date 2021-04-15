import React, { useState } from "react";
import { Col, Layout, PageHeader, Row, Button } from "antd";
import BooksTable from "../../components/BooksTable";
import "./Main.scss";
import CustomModal from "../../components/CustomModal";
import AddProduct from "../../layouts/AddProduct";
import { AppstoreAddOutlined } from "@ant-design/icons";
function Main() {
  const { Header, Content, Footer } = Layout;

  const [state, setState] = useState({
    isModalVisible: false,
  });

  const showModal = () => {
    setState({ ...state, isModalVisible: true });
  };

  const handleOk = () => {
    setState({ ...state, isModalVisible: false });
  };

  const handleCancel = () => {
    setState({ ...state, isModalVisible: false });
  };

  return (
    <Layout className="layout">
      <CustomModal
        title="add modal"
        visible={state.isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        component={AddProduct}
      />{" "}
      <Header>
        <div className="logo" />
      </Header>{" "}
      <Content style={{ padding: "50px" }}>
        <div className="site-layout-content">
          <Row gutter={[8, 8]} justify="space-between" align="middle">
            <Col>
              {" "}
              <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
              />
            </Col>{" "}
            <Col>
              {" "}
              <Button
                // type="primary"
                size="large"
                onClick={showModal}
                icon={<AppstoreAddOutlined />}
              >
                Add Product
              </Button>
            </Col>{" "}
          </Row>

          <BooksTable />
        </div>{" "}
      </Content>{" "}
      <Footer style={{ textAlign: "center" }}>
        Ant Design© 2018 Created by Ant UED{" "}
      </Footer>{" "}
    </Layout>
  );
}

export default Main;

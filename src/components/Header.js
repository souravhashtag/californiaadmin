import React from "react";
import { Layout } from "antd";
const { Header } = Layout;

const AppHeader = () => (
  <>    
    <Header style={{ backgroundColor: "#fff", padding: 0 }}>
      <h2 style={{ margin: "0 20px" }}>Admin Panel</h2>
    </Header>
  </>
);

export default AppHeader;

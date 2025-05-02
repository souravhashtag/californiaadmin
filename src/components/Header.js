import React from "react";
import { Layout } from "antd";
import { useNavigate, Link } from "react-router-dom";
import {
  LogoutOutlined
} from "@ant-design/icons";



const { Header } = Layout;

const AppHeader = () => {

  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    
    navigate("/login");
  };

  return(
  <>    
    <Header style={{ backgroundColor: "#fff", padding: 0, display:'flex', width:"100%", justifyContent:"space-between" }}>
      <h2 style={{ margin: "0 20px" }}>Admin Panel</h2>


     <div className="logout">
              <Link 
                key="7" 
                icon={<LogoutOutlined />} 
           
              >
                Logout
              </Link>
            </div>
    


    </Header>
  </>
  )
};

export default AppHeader;

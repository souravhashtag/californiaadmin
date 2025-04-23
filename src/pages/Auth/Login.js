
import React, { useState,useEffect } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../config/apiFunctions';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true); 
    console.log(values);
    login(values.email, values.password)
      .then((data) => {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        message.error('Login failed. Please check your credentials.');
      });
  
    setLoading(false);
  };
  useEffect(()=>{    
    let arr=[3, 7, 1, 2, 8, 4, 5];
    for(let i=Math.min(...arr);i<=Math.max(...arr);i++){
      if(!arr.includes(i)){
        console.log(i)
      }
    }
  },[])
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '50px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: '100%' }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

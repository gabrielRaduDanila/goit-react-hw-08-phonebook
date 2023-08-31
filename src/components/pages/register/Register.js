import { useDispatch } from 'react-redux';
import { register } from 'features/auth/operations';
import './register.css';

import { Button, Form, Input } from 'antd';

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Register = () => {
  const dispatch = useDispatch();
  const onFinish = values => {
    console.log(values);
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        marginTop: 30,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input placeholder="Please type your name!" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email address!',
          },
        ]}
      >
        <Input type="email" placeholder="Please type email address!" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password minlength="8" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;

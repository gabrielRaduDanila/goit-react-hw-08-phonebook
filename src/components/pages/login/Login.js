import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from 'features/auth/operations';

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  // const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = values => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    // form.resetFields();
  };

  return (
    <Form
      // form={form}
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
        <Input.Password minLength={8} />
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
export default Login;

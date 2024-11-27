import { Form, Input, Button } from 'antd'

const Admin = () => {
    const onFinish = (values) => {
        console.log('Form values:', values)
    }

    return (
        <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto"}}>
            <h1>Admin Page</h1>
            <Form name='admin' layout='vertical' onFinish={onFinish}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Admin
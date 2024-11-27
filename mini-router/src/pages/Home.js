import { Typography, Card } from 'antd'

const { Title, Paragraph } = Typography

const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Welcome to our Mini E-commerce</Title>
            <Paragraph>
                This is the home page of the application. You can add any content you want here.
            </Paragraph>
            <Card title="Our Services" style={{ marginTop: 20 }}>
                <p>📦 Product Quality</p>
                <p>🚚 Fast Shipping</p>
                <p>🛒 Easy Shopping</p>
            </Card>
        </div>
    )
}

export default Home
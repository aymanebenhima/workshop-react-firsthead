import { List, Card } from 'antd'

const categories = ['Electronics', 'Clothing', 'Books', 'Sports', 'Home']

const Category = () => {
    return (
        <div style={{ padding: '20px' }}>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={categories}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item}>{`Discover our ${item.toLowerCase()} category `}</Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Category
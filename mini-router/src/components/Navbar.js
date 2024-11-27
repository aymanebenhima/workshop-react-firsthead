import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['Home']}>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="category">
                <Link to="/category">Category</Link>
            </Menu.Item>
            <Menu.Item key="products">
                <Link to="/products">Products</Link>
            </Menu.Item>
            <Menu.Item key="admin">
                <Link to="/admin">Admin</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar
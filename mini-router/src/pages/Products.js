import { Table } from 'antd';

const products = [
    { key: '1', name: 'Laptop', price: '$999', stock: 'Disponible' },
    { key: '2', name: 'T-Shirt', price: '$19', stock: 'Rupture' },
    { key: '3', name: 'Montre', price: '$99', stock: 'Disponible' },
];

const columns = [
    { title: 'Nom', dataIndex: 'name', key: 'name' },
    { title: 'Prix', dataIndex: 'price', key: 'price' },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' },
];

const Products = () => <Table dataSource={products} columns={columns} />

export default Products
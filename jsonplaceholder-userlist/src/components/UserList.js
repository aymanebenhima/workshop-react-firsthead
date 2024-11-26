import React, { useEffect, useState } from 'react'
import { Table, Input, Spin, message } from 'antd'
import { getUsers } from '../services/api'
import Search from 'antd/es/input/Search'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const res = await getUsers()
            setUsers(res)
            setFilteredUsers(res)
        } catch (error) {
            message.error('Cannot fetch data users')
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = (value) => {
        const filtered = users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredUsers(filtered)
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (address) => `${address.city}, ${address.street}`
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            render: (company) => company.name
        },
    ]

    return (
        <div style={{ padding: "24px" }}>
            <h1>User List !</h1>
            <div style={{ marginBottom: 16 }}>
                <Search
                    placeholder="input search text"
                    onSearch={handleSearch}
                    enterButton
                />
            </div>

            <Table columns={columns} dataSource={filteredUsers} loading={loading} />
        </div>
    )
}

export default UserList
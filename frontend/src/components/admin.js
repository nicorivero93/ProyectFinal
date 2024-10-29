import React, { useEffect, useState } from 'react';

function Admin() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await fetch('/admin/users');
        const data = await res.json();
        setUsers(data);
    };

    const deleteUser = async (id) => {
        await fetch(`/admin/users/${id}`, {
            method: 'DELETE'
        });
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h1>Administración de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.email}
                        <button onClick={() => deleteUser(user.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Admin;

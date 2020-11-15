import React, { useState, useEffect, useContext } from 'react';
import './UsersList.scss';
import { User } from './user/User';
import { AppContext } from '../AppContext';

async function fetchUsers() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/');
    return result.json();
}

export function UsersList(props) {

    const [users, setUsers] = useState([]);
    const context = useContext(AppContext);

    useEffect(() => {
        const get = async () => {
            const result = await fetchUsers();
            setUsers(result);
        }
        
        get();
    }, []);

    if (users.length <= 0) {
        return <div>Loading Users...</div>
    }

    return <div className="users-list">
        <h1>Users list {context.selectedUser}</h1>

        <div className="list">
            { 
                users.map(user => <User 
                    name={ user.name } 
                    email={ user.email }
                    address={ user.address }
                    id={ user.id }
                    companyName={ user.company.name }
                    ></User>)
            }
        </div>
    </div>;
}


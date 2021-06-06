import React from 'react';
import Card from '../../UI/Card/Card';
import UserList from './UserList/UserList';

const UsersList = ({usersData}) => {
    const usersList = usersData.map(userData => <UserList key={userData.id} userData={userData} />)
    return (
        <Card>
            {usersList}
        </Card>
    );
};

export default UsersList;
import React from 'react';

const UserList = ({userData}) => {
    return (
        <div style={{border: '1px solid red', margin: '10px', padding: '0px 10px', borderRadius: '5px'}}>
            <p>{userData.userName} ({userData.age} years old)</p>
        </div>
    );
};

export default UserList;
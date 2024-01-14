import React from 'react'

function DragAndDropCards() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 4, name: 'Alice Johnson', email: 'alice@example.com' },
    ];

    return (
        <div>
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    );


}

export default DragAndDropCards
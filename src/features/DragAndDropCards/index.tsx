import React from 'react'

function DragAndDropCards() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 4, name: 'Alice Johnson', email: 'alice@example.com' },
    ];

    return (
        <div className="flex space-x-4 w-[100%]">
            {users.map(user => (
                <div key={user.id} className="bg-white rounded-lg p-4 shadow-md cursor-pointer">
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-gray-600">Email: {user.email}</p>
                </div>
            ))}
        </div>
    );


}

export default DragAndDropCards
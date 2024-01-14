import React from 'react'

function DragAndDropCards() {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 4, name: 'Alice Johnson', email: 'alice@example.com' },
    ];

    return (
        <div className=" w-[100%]">
            <div className='flex space-x-2 justify-between w-[70%]'>
                {users.map(user => (
                    <div key={user.id} className="w-[300px] bg-white rounded-lg p-4 shadow-md cursor-pointer" draggable>
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default DragAndDropCards
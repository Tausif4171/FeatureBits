import React, { useState } from 'react'

function DragAndDropCards() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 4, name: 'Alice Johnson', email: 'alice@example.com' },
    ]);

    const [draggedUser, setDraggedUser] = useState<any>(null);

    const handleDragStart = (event: any, user: any) => {
        setDraggedUser(user);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };

    const handleDrop = (event: any, targetUser: any) => {
        // Create a new array of users by mapping over the existing users array
        const updatedUsers = users.map(user =>
            // If the current user in the map is the same as the targetUser (the one where the drop occurred),
            // replace it with the draggedUser (the user being dragged)
            user.id === targetUser.id ? draggedUser :
                // If the current user is the draggedUser, replace it with the targetUser
                user.id === draggedUser.id ? targetUser :
                    // If neither of the above conditions is true, keep the user unchanged
                    user
        );

        // Update the state with the new array of users
        setUsers(updatedUsers);

        // Reset the draggedUser state to null, as the dragging operation has concluded
        setDraggedUser(null);
    };


    return (
        <div className="w-[100%]">
            <div className="flex space-x-2 justify-between w-[70%]">
                {users.map(user => (
                    <div
                        key={user.id}
                        className="w-[300px] bg-white rounded-lg p-4 shadow-md cursor-pointer"
                        draggable
                        onDragStart={(event) => handleDragStart(event, user)}
                        onDragOver={(event) => handleDragOver(event)}
                        onDrop={(event) => handleDrop(event, user)}
                    >
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default DragAndDropCards
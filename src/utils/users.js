const users = []

const addUser = ({id, username, room}) => {

    username = username.trim();
    room = room.trim();

    if(!username || !room){
        return { error: 'Username and room are required'};
    }

    const existingUser = users.find((user) => user.username === username && user.room === room);

    if(existingUser){
        return { error: 'Username is in use!'};
    }

    const user = { id, username, room };
    users.push(user);
    return { user };
}

const removeUser = (id) => {
    
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room.trim());

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
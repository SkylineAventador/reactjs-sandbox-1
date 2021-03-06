let state = {
    profilePage: {
        posts: [
            {id: 1, postText: 'Hello, this is my first post!', likesCount: 15},
            {id: 2, postText: 'Great, this is my second post!', likesCount: 7}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Inna'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Dasha'}
        ],

        messages: [
            {id: 1, message: 'Hello, this is my first message'},
            {id: 2, message: 'Thumbnail'}
        ]
    }

}

export default state;

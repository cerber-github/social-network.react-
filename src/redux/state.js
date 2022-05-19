let rerenderEntireTree = () => {
    console.log('changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: 'Its my first post', likeCount: 25}
        ],
        newPostText: 'enter text..'
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 1, message: 'Haw are you?'},
            {id: 1, message: 'Yep'}
        ],
        dialogs: [
            {id: 1, name: 'Tania'},
            {id: 2, name: 'Rost'},
            {id: 3, name: 'Vlad'},
            {id: 4, name: 'Dima'},
            {id: 5, name: 'Anton'}
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;
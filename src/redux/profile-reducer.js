const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likeCount: 12
        },
        {
            id: 2,
            message: 'Its my first post',
            likeCount: 25
        }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.message,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost]
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newMessage) => {
    return {
        type: ADD_POST,
        message: newMessage
    }
}

export default profileReducer;
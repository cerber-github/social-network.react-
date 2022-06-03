import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={store._state}
                 addPost={store.addPost}
                 updateNewPostText={store.updateNewPostText}/>
        </React.StrictMode>
    );

    reportWebVitals();
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


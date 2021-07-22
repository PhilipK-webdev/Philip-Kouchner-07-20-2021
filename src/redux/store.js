import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const configureStore = () => {
    const store = createStore(reducers, composeWithDevTools());
    return store;
}

export default configureStore();
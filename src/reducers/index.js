import { combineReducers } from 'redux';
import AnimeListReducer from './AnimeListReducer';
import NotificationReducer from './NotificationReducer';

const reducer = combineReducers({
    AnimeListReducer: AnimeListReducer,
    NotificationReducer: NotificationReducer,
});

export default reducer;
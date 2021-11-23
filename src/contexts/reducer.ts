import { Actions, ActionType, GlobalStateType } from './types';

const Reducer = (state: GlobalStateType, action: ActionType): GlobalStateType => {
    switch (action.type) {
        case Actions.SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case Actions.SET_PERSISTANCE:
            return {
                ...state,
                persistanceMode: action.payload,
            };
        default:
            return state;
    }
};

export default Reducer;

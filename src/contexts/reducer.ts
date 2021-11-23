import { ActionType, GlobalStateType } from './types';

const Reducer = (state: GlobalStateType, action: ActionType) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_THEME':
            return {
                ...state,
                theme: payload,
            };
        case 'GET_THEME':
            return state.theme;
        default:
            return state;
    }
};

export default Reducer;

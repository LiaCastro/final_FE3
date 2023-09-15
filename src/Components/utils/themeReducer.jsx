export const TOGGLE_LIGHT_THEME = 'TOGGLE_LIGHT_THEME';
export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME';


export const themeReducer = (state, action) => {
switch (action.type) {
    case TOGGLE_LIGHT_THEME:
    return { theme: 'light' };
    case TOGGLE_DARK_THEME:
    return { theme: 'dark' };
    default:
    return state;
}
};


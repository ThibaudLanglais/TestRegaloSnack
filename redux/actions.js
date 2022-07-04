import {SWITCH_THEME} from './ACTION_TYPES';

export const switchTheme = (theme) => dispatch => {
    dispatch({
        theme: theme,
        type: SWITCH_THEME,
    })
}
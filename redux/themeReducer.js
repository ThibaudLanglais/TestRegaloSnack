import { lightTheme, purpleTheme } from "../themes/themes";
import { SWITCH_THEME } from "./ACTION_TYPES";
export const themes = [lightTheme, purpleTheme]
const initialState = {
    theme: purpleTheme,
}

const themeReducer = (state = initialState, action) => {
    switch(action.type){
        case SWITCH_THEME:
            return {theme: action.theme}
        default:
            return state;
    }
}

export default themeReducer;
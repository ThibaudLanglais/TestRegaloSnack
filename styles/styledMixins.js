import { css } from "styled-components";
import _default from "../themes/default";

const buttonMixin = css`
    padding: 10px;
    borderRadius: 5px;
    marginTop: 5px;
    display: flex;
    justifyContent: center;
    alignItems: center;
    flexDirection: row;
`

const popupTitleMixin = css`
    fontFamily: ${_default.regular};
    color: ${props => props.theme.THEME_COLOR};
    textAlign: center;
`

const softShadow = css`
    elevation: 10;
    shadowColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
    shadowOffset: 0 3px;
    shadowOpacity: 0.4;
    shadowRadius: 4px;
`

export { buttonMixin, popupTitleMixin, softShadow };
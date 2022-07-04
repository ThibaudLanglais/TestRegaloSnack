import _default from "../themes/default";
import CustomText from "./customText";

export default function Strong(props){
    return <CustomText style={[props.style, {fontFamily: _default.bold}]}>{props.children}</CustomText>
}
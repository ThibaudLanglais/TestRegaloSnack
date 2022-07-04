import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

export default function ThemedContainer(props) {

    const theme = useSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
  )
}
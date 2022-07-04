import React from 'react'
import styled, { useTheme } from 'styled-components/native'
import Topbar from '../Navigation/Topbar';

export default function TopBarLayout(props) {

    const theme = useTheme();
  return (
    <>
        <Topbar/>
        <Container>
        {props.children}
        </Container>
    </>
  )
}

const Container = styled.View`
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    paddingTop: 80px;
    position: relative;
    flex: 1;
`
import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from '../customText'
import styled, { useTheme } from 'styled-components'
import { Check } from 'react-native-feather'

export default function ThemePickerItem({theme, updateTheme}) {
  const activeTheme = useTheme();
  return (
    <Item>
        {activeTheme.name === theme.name &&
          <Check width={20} color={activeTheme.PRIMARY_TEXT_COLOR} style={{marginRight: 10}}/>
        }
        <TouchableOpacity onPress={() => updateTheme(theme)}>
            <Title>{theme.name}</Title>
        </TouchableOpacity>
    </Item>
  )
}

const Title = styled(CustomText)`
  marginVertical: 10px;
  fontSize: 16px;
`
const Item = styled.View`
  display: flex;
  flexDirection: row;
  alignItems: center;
`

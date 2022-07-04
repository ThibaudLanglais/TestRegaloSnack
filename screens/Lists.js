import { useState } from "react";
import { FlatList, StyleSheet, TouchableHighlight } from "react-native";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import AddListPopup from "../components/GiftLists/AddListPopup";
import ExternalSvg from "../components/ExternalSvg";
import ListCard from "../components/GiftLists/ListCard";
import TopBottomBarLayout from "../components/Layouts/TopBottomBarLayout";
import _default from "../themes/default";
import styled, { useTheme } from "styled-components";

export default function Lists(){

    const theme = useTheme();
    const addButtonRotation = useSharedValue(0);
    const [menuOpened, setMenuOpened] = useState(false);

    const animatedAddButtonStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: withSpring(addButtonRotation.value+'deg') }
            ]
        }
    });


    const lists = ['Anniversaire', 'Apéro', 'Crémaillère', 'Mariage', 'Naissance']

    function renderItem({item}){
        return <ListCard item={item}></ListCard>
    }

    function toggleMenu(){
        setMenuOpened(!menuOpened);
        addButtonRotation.value = menuOpened ? 0 : 45;
    }

    return (
        <TopBottomBarLayout>
            <Wrapper>
                <AddButton underlayColor={theme.THEME_COLOR_LIGHT} onPress={toggleMenu}>
                    <ExternalSvg 
                        style={[animatedAddButtonStyles]} 
                        icon={{name: "add", height: 30, width: 30, fill: theme.SECONDARY_TEXT_COLOR}}
                    />
                </AddButton>
                <FlatList contentContainerStyle={{paddingTop: 10}} showsVerticalScrollIndicator={false} data={lists} renderItem={renderItem}></FlatList>
                <AddListPopup menuOpened={menuOpened}/>
            </Wrapper>
        </TopBottomBarLayout>
    )
}

const Wrapper = styled.View`
    paddingHorizontal: 15px;
    flex: 1;
    paddingBottom: 55px;
`

const AddButton = styled.TouchableHighlight`
    backgroundColor: ${props => props.theme.THEME_COLOR};
    width: 60px;
    height: 60px;
    display: flex;
    justifyContent: center;
    alignItems: center;
    borderRadius: 20px;
    position: absolute;
    bottom: 80px;
    right: 15px;
    zIndex: 1;
    elevation: 10;
    shadowColor: ${props => props.theme.SECONDARY_BACKGROUND_COLOR};
    shadowOffset: 0 3px;
    shadowOpacity: 0.4;
    shadowRadius: 5px;
`
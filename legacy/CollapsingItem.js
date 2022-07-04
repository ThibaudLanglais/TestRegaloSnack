import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CollaspedQuestionsContext from "../contexts/CollaspedQuestionsContext";
import _default from "../themes/default";
import ExternalSvg from "./ExternalSvg";

export default function CollapsingItem({item}){

    const [collapsed, setCollapsed] = useState(false);
    const itemStyle = StyleSheet.create({
        content: {
            height: collapsed ? null : 0, 
        },
        container: {
            borderBottomWidth: 1, 
            borderBottomColor: _default.primary,
            paddingTop: 9,
            paddingBottom: 5,
        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
        }
    })

    return (
        <CollaspedQuestionsContext.Provider
            value={{collapsed: collapsed}}
        >
            <View style={[itemStyle.container]}>
                <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
                    <View style={[itemStyle.titleContainer]}>
                        <ExternalSvg iconWidth={20} iconName={collapsed ? "faq-select" : "faq"}/>
                        {item.title}
                    </View>
                </TouchableOpacity>
                <View style={[itemStyle.content]}>{item.content}</View>
            </View>
        </CollaspedQuestionsContext.Provider>
    )
}
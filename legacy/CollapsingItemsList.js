import { FlatList, View } from "react-native";
import CollapsingItem from "./CollapsingItem";

export default function CollapsingItemsList({items, style}){
    // Pas de flatlist car elle se trouve dans une scrollview
    // -> génère une erreur, il y a peu d'items donc ça va.
    return <View style={[style]}>
        {items.map((item, i) => <CollapsingItem key={i} item={item}/>)}
    </View>
}
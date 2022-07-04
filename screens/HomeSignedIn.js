import InvitesList from "../components/Timeline/InvitesList";
import TopBottomBarLayout from "../components/Layouts/TopBottomBarLayout";
import EventsList from "../components/Timeline/EventsList";
import { ScrollView } from "react-native";

export default function HomeSignedIn(){

    return (
        <TopBottomBarLayout>
            <ScrollView contentContainerStyle={{paddingHorizontal: 15, paddingBottom: 55}} showsVerticalScrollIndicator={false} >
                <EventsList/>
                <InvitesList/>
            </ScrollView>
        </TopBottomBarLayout>
    )
}
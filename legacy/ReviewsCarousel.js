import { StyleSheet, View, Dimensions, Image } from "react-native";
import _default from "../themes/default";
import CustomText from "../components/customText";
import Slick from "react-native-slick";
import reviews from "../assets/homePage/reviews";
import GlobalStyles from "../styles/GlobalStyles";

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const carouselStyles = StyleSheet.create({
    wrapper:{
        marginLeft: 20,
        paddingVertical: 20,
        backgroundColor: _default.bgPrimary,
        height: WINDOW_HEIGHT*0.6,
    },
    slide: {
        backgroundColor: _default.bgPrimary,
        height: WINDOW_HEIGHT*0.6-40,
        width: WINDOW_WIDTH-40,
        borderRadius: 15,
        padding: 20,
        shadowColor: _default.bgSecondary,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer: {
        borderRadius: 15,
        width: WINDOW_WIDTH*0.8,
        height: 350,
        backgroundColor: 'brown',
        padding: 20,
    },
    photoShadow: {
        shadowColor: _default.bgSecondary,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 8,
        backgroundColor: 'transparent',
        borderRadius: 100,
        marginBottom: 30,
    },
    photoWrapper: {
        width: 120,
        height: 120,
        borderRadius: 100,
        overflow: 'hidden',
    },
    photo:{
        width: "100%",
        height: "100%",
    }
})

function ReviewsCarousel(){
    return (
        <Slick style={carouselStyles.wrapper} showsPagination={false} loop autoplay autoplayTimeout={2.5}>
            {reviews.map((review, i) => (
                <View key={i} style={carouselStyles.slide}>
                    <View style={carouselStyles.photoShadow}>
                        <View style={carouselStyles.photoWrapper}>
                            <Image 
                                style={carouselStyles.photo}
                                source={review.image}
                            />
                        </View>
                    </View>
                    <CustomText style={[GlobalStyles.h2, GlobalStyles.textCenter]}>{review.name}</CustomText>
                    <CustomText style={[GlobalStyles.p, GlobalStyles.textCenter, {fontSize: 18, marginTop: 10}]}>{review.text}</CustomText>
                </View>
            ))}
        </Slick>
    )
}

export default ReviewsCarousel;
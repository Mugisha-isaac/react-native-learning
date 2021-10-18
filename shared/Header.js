import React from 'react';
import { StyleSheet,Image,SafeAreaView,View,Text, Dimensions} from "react-native";


var {width} = Dimensions.get("window");
const Header = ()=>{
    return(
        <SafeAreaView style={styles.header}>
              <Image
                resizeMode="contain"
                source={require("../assets/images/purepng.com-food-platefood-meat-plate-tasty-grill-breakfast-dinner-french-fries-launch-941524624270veqpm.png")}
                style={styles.imageStyles}
               />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        padding: 20
    },
    imageStyles:{
        width: 100,
        height: 100,
        borderRadius: "50%",
        top: -45
    },
})

export default Header;
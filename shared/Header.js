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
        height:  200,
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
        // backgroundColor: "blue",
        marginTop: 60
        
        // position: "relative"
    },
    imageStyles:{
        width: 100,
        height: 100,
        borderRadius:10,
        // position:"absolute",
        top:50,
        left: 120
    },
})

export default Header;
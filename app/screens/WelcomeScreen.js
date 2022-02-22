import {Image, ImageBackground, StyleSheet, Text, View, Button, Alert} from "react-native";

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       style={styles.background}
       source={require("../assets/background.jpg")}
       >
           <View style={styles.logoContainer}>
           <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
           <Text>Sell What you Want Here</Text>
           <Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  onPress={() => Alert.alert('Button with adjusted color pressed')}
/>

           </View>
           <View style={styles.loginButton}></View>
           <Text style={styles.loginText}>Login </Text>
           <View style={styles.registerButton}></View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginText: {
        
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",

    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",

    },
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",

    }
})

export default WelcomeScreen;

// test
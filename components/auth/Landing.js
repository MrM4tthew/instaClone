import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Landing = (props) => {
    const { navigation } = props

    return (
        <View style={styles.landingWrapper}>
            <Button title="Register" onPress={() => navigation.navigate("Register")} />
            <Button title="Login" onPress={() => navigation.navigate("Login")} />
        </View>
    )
}

const styles = StyleSheet.create({
    landingWrapper: {
        flex: 1,
        justifyContent: "center"
    }
});

export default Landing

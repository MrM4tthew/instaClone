import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'

const handleLogout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

const Feed = () => {
    return (
        <View style={{ flex: 1, marginTop: 300 }}>
            <Text>Feed Page</Text>
            <Button title="sign out" onPress={() => handleLogout()} />
        </View>
    )
}

export default Feed

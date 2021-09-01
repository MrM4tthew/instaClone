import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'

import { connect } from 'react-redux'

const Profile = () => {
    return (
        <View>
            <Text>Profile Page</Text>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
})

export default connect(mapStateToProps, null)(Profile)

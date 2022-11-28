import { createContext, useState, useContext } from 'react'
import { LoginContext } from '../Login_Context';

function ShowUserInfo(props) {
    const { isSignedIn, setSignedIn, username, setUsername, userLevel, setUserLevel } = useContext(LoginContext);

    return (
        <View>
            <Text style={{ textAlign: "center", paddingVertical: 20, fontSize: 20, backgroundColor: "grey", }}>{username}</Text>
            <Text style={{ textAlign: "center", paddingBottom: 20, backgroundColor: "grey", }}>{userLevel}</Text>
        </View>
    )
}

export default {ShowUserInfo}
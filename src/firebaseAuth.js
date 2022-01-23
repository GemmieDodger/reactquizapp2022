import React from 'react';
import { FunctionComponent,  useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./Firebase";
import "firebase/auth";

const firebaseAuthConfig = {
    signInFlow: "popup",
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
        {
            provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        },
    ],
    signInSuccessUrl: "/",
}

const FirebaseAuth = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, [])

    return (
        <>
        {show && (
            <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={firebase.auth()} />
            )}
        </>
    )
}

export default FirebaseAuth;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCnx59Xkg5sCCUKW8GBZmSaBSIZXI5uVA4",
    authDomain: "proyect-40616.firebaseapp.com",
    projectId: "proyect-40616",
    storageBucket: "proyect-40616.appspot.com",
    messagingSenderId: "897673344599",
    appId: "1:897673344599:web:478a798e07cf3b565fd512",
    measurementId: "G-4Z9GYZ6G07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();


function Login() {
    const navigate = useNavigate();
    const [activeUser, setActiveUser] = useState({});

    const handleLogin = async () => {
    
        try {
            
            signInWithPopup(auth, provider)
            .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log('The userrerere', {
                token,
                user
            });
            setActiveUser(user);
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error({
                errorCode,
                errorMessage,
                email,
                credential
            })
            // ...
            });
        } catch (error) {
            console.error('Error en el login:', error);
            alert('Error en el login, por favor intente más tarde.');
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
    
            <button onClick={() => handleLogin()}>Login with Google</button>
            {}
            <p>¿No tienes una cuenta? <span onClick={() => navigate('/register')} className="register-link">Registrarse</span></p>
            {
                activeUser ?
                <h2> {activeUser.displayName} </h2>
                : <>No Active User</>
            }

        </div>
    );
}

export default Login;

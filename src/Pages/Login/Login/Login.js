
import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    return (
        <div>
            <h2>Please logIn</h2>
            <Button onClick={signInUsingGoogle} variant='primary'>Google SignIn</Button>
        </div>
    );
};

export default Login;
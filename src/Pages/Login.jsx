import React from 'react'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { Box, Text, Input, Button } from '@chakra-ui/react'

const Login = () => {
    const navigate = useNavigate();
    const { state, handlelogin } = useContext(AppContext);
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formState)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                navigate("/");
                console.log(state.auth);
                handlelogin();
                // auth.handlelogin(res.token);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Box w='50%' ml='14%' mt='30px' mb='80px'>
                <Text fontSize='40px' >Sign in</Text>
                <Text>Access your online courses and trach your courses</Text>
            </Box>
            <Box w='13%' ml='25%' mt='25px' mb='40px' border='1px solid white' boxShadow='xl' p='5px' >
                <img src="https://learndigital.withgoogle.com/static/digital-workshop/assets/icons/google-button-g.png"
                    height="32" width='16' alt="" srcset="" />
                <Text p='5px' fontSize='sm' pl='25px' mt='-23px'>
                    Sign in With Google</Text>
            </Box>
            <Text w='25%' fontSize='lg' ml='25%' mb='30px'>Or Continue with email</Text>

            <Box w='50%' m='auto' mb='200px'>
                <form onSubmit={handlesubmit}>

                    <Input
                        name="email"
                        value={formState.email}
                        onChange={handlechange}
                        type="email"
                        variant='flushed' placeholder='Email' mb='30px' />

                    <Input
                        type="password"
                        name="password"
                        onChange={handlechange}
                        value={formState.password}
                        variant='flushed' placeholder='Password' mb='20px' />
                    <Box display='flex' gap='60%' mb='15px'>
                        <Text color="#1979f7" fontSize='lg' >Forgotten password?</Text>
                        <Button p='20px' type="submit" value="SUBMIT">Sign in</Button>
                    </Box>
                    <Text mb='20px' fontSize='xs'>By signing in you agree to the Google Terms of Service and Privacy Policy</Text>
                    <hr />
                    <Text mt='20px' mb='30px'>Need an account? <span style={{ color: '#1979f7' }} >Sign up here</span></Text>
                    <hr />
                </form >
            </Box>

        </>
    )
}

export default Login

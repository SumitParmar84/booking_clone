import { Button, Container, Fieldset, Group, Image, PasswordInput, SimpleGrid, Space, Stack, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const { storetokenInLS } = useAuth();
  const login = async () => {
    const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/login", {
      method: "POST",
      headers: {
        "projectID": "f104bi07c490",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin,
        appType: "bookingportals"
      })
    })
    const data = await result.json();
    console.log(data);
    storetokenInLS(data.token);
    console.log(data.token);
    setEmailLogin("");
    setPasswordLogin("");
    location.replace('/');
  }
  return (
    <Container>
      <Space h={30}/>
      <SimpleGrid cols={2} >
            <Image radius='lg' src='https://t3.ftcdn.net/jpg/03/27/47/64/360_F_327476437_wUTmsvTLezc2fNh3UmqrOYE7xyWp1fvo.jpg' fit />
        <Fieldset>
          <Stack gap={30} p={20}>
            <TextInput label="Email" placeholder="Your Email" required
        value={emailLogin} onChange={(e)=>setEmailLogin(e.target.value)}    />
            <PasswordInput label="Password" placeholder="Your password" required value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
            <Group justify="flex-end" mt="md">
            <Button onClick={login}>Login</Button>
            </Group>
          </Stack>
        </Fieldset>
      </SimpleGrid>
      <Space h={30}/>
    </Container>
  )
}

export default Login
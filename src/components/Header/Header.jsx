import { Box, Button,  Container, Flex, Group, Modal, PasswordInput, Stack,  TextInput, } from '@mantine/core'
import './header.css'
import { IoHelpCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useAuth } from '../../store/auth';


const Header = () => {
  const navigate = useNavigate();
  const [openedSignUp, { open, close }] = useDisclosure(false);
  const [userNameSignup,setUserNameSignup] = useState("");
  const [emailSignup,setEmailSignup] = useState("");
  const [passwordSignup,setPasswordSignup] = useState("");
  const { storetokenInLS , isLoggedIn } = useAuth();

  const register = async () => {
    const result = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/signup",{
      method:"POST",
      headers:{
        "projectID":"f104bi07c490",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:userNameSignup,
        email:emailSignup,
        password:passwordSignup,
        appType:"bookingportals"
      })
    })
    const data = await result.json();
    console.log(data);
    storetokenInLS(data.token);
    setEmailSignup("");
    setPasswordSignup("");
    setUserNameSignup("");
    // location.reload();
  }
  return (
    <Box>
      <header>
        <Container size="xl">
            <nav>
                <p className='sitename'>Booking.com</p>
                <Group gap="sm">
                    <IoHelpCircleOutline size={28} />
                    {isLoggedIn ? 
                        <Button variant='default' onClick={()=>navigate("/logout")}>Logout</Button>
                        :
                        (<><Button c='blue' variant="default" onClick={open}> Register </Button><Button c='blue' variant='default' onClick={()=>navigate('/login')}>Sign in</Button></>)
                    }
                    <Modal opened={openedSignUp} onClose={close} title="Sign Up" centered>
                      <Stack>
                      <TextInput label="Name" onChange={(e)=>setUserNameSignup(e.target.value)} required />
                      <TextInput label="Email" onChange={(e)=> setEmailSignup(e.target.value)} required />
                      <PasswordInput label="Password" value={passwordSignup} onChange={(e) => setPasswordSignup(e.target.value)} required />
                      <Group justify='space-between'>
                          <Button onClick={register}>Register</Button>
                      </Group>
                      </Stack>      
                    </Modal>
                </Group>
            </nav>
            <nav>
                <Flex direction="row" gap={20}>
                    <Button onClick={()=>navigate('/')} style={{borderRadius:30}} color='white' variant='outline'>Stays</Button>
                    <Button onClick={()=>navigate("/flights")}style={{borderRadius:30}} color='white' variant='outline'>Flights</Button>
                    <Button onClick={()=>navigate("/hotels")} style={{borderRadius:30}} color='white' variant='outline'>Hotels</Button>
                </Flex>
            </nav>
        </Container>
      </header>
    </Box>
  )
}

export default Header

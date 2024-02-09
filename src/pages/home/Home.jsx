import { BackgroundImage, Center, Container, Group, Space, Stack, Text, Title, rem } from '@mantine/core'
import Offers from '../../components/Offers'
import SearchHotels from '../../components/SearchBar'
import { useDocumentTitle } from '@mantine/hooks'
import { useAuth } from '../../store/auth'

const Home = () => {
  useDocumentTitle("Stay");
  const {isLoggedIn} = useAuth();
  return (
    <>
        <BackgroundImage component={Center} align='center' className='background_image' src="https://r-xx.bstatic.com/xdata/images/xphoto/2880x868/296661902.jpeg?k=81d5ab638f6a52308efde9aff4e7f4d468ee89a8db0677723edf0ff76410d6ec&o=">
            <Container>
              <Stack>
                {isLoggedIn ? <Title c="white">Hey Traveller</Title>:
              <Title c="white" style={{fontSize:rem(50)}}>Find your next stay</Title>
            }
              <Text c="white" style={{fontSize:rem(30)}}>Search deals on hotels, homes, and much more...</Text>
              </Stack>
            </Container>
        </BackgroundImage>
        <Space h={rem(30)}/>
        <SearchHotels/>
        <Offers/>
    </>
  )
}

export default Home
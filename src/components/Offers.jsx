import { Card, Container, Group, Image, Space, Stack, Text, Title, rem } from '@mantine/core'
import {Carousel} from '@mantine/carousel'
import { useEffect, useState } from 'react'

const Offers = () => {
    const [offers,setOffers] = useState([]);

    useEffect(()=>{
        const fetchOffers = async () => {
            const results = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/offers',{
                headers:{
                    "projectID":"f104bi07c490"
                }
            });
            const { data } = await results.json();
            setOffers(data.offers);
            console.log(data);
        }

        fetchOffers();
    },[])
  return (
    <Container>
        <Stack py={20}>
                <Title ta='center' fw={800}>Offers</Title>
        <Carousel
            height={350}
            slideSize="22.333%"
            slideGap="sm"
            align="start"
            >
        {offers.map((e)=>{
            return (
                <Carousel.Slide key={e.id}>
                    <Card shadow="sm" style={{height:rem(300)}} radius="lg" className='offer_card'>
                        <Group align='center' justify='center'>
                            <Image src={e.heroUrl} alt="error" style={{height:rem(200),width:rem(200),borderRadius:rem(10)}} />
                            <Text size="sm">{e.pTl}</Text>
                        </Group>
                    </Card>
                </Carousel.Slide>
            )
        })}
        </Carousel>
        <Space h="2"/>
        </Stack>
    </Container>
  )
}

export default Offers
import { Container, Space, rem } from '@mantine/core'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchFlights from "./../../components/SearchFlights"
import OffersFlights from '../../components/OffersFlights'
import { useDocumentTitle } from '@mantine/hooks'

const Flights = () => {
  useDocumentTitle("Flights")
  const params = useParams();
  console.log(params);
  
  useEffect(()=> {
    const fetchFlights = async () => {
     const results = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${params.from}","destination":"${params.to}"}&day=${params.day}`,{
         headers:{
             "projectID":"f104bi07c490"
         }
     });
     const data = await results.json();
     console.log(data);
    } 

    fetchFlights()
 },[])
  return (
    <Container>
      <SearchFlights/>
      <Space h={rem(5)} />
      <OffersFlights/>
    </Container>
  )
}

export default Flights
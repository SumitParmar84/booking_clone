import { Autocomplete, Button, Center, Container, Grid, Paper, Stack, rem } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const data = [
  "Mumbai (BOM)",
  "Pune (PNQ)",
  "Jaipur (JAI)",
  "Ahmedabad (AMD)",
  "Delhi (DEL)",
  "Kolkata (CCU)",
  "Chennai (MAA)",
  "Bengaluru (BLR)",
  "Hyderabad (HYD)",
  "Lucknow (LKO)",
  "Chandigarh (IXC)",
  "Surat (STV)",
  "Amritsar (ATQ)",
  "Nagpur (NAG)",
  "Goa (GOI)",
  "Guwahati (GAU)",
  "Kochi (COK)",
  "Bhubaneswar (BBI)",
  "Coimbatore (IXC)",
  "Mangalore (IXE)",
  "Thiruvananthapuram (TRV)",
  "Vododara (BDQ)",
  "Madurai (IXM)",
  "Patna (PAT)",
  "Leh (IXL)",
  "Dehradun (DED)",
  "Agartala (IXA)",
  "Gaya (GAY)",
  "Raipur (RPR)",
  "Jammu (IXJ)"
];

const SearchFlights = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [day, setDay] = useState("");
  const navigate = useNavigate();


  return (
    <Container p={rem(20)}>
      <Paper p={rem(20)} shadow='sm' component={Stack} gap={rem(30)}>
        <Grid>
          <Grid.Col span={4}>
            <Autocomplete
              variant='filled'
              size='lg'
              data={data}
              value={source}
              required
              onChange={setSource}
              label="From"
              placeholder="Source"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Autocomplete
              variant='filled'
              size='lg'
              data={data}
              value={destination}
              required
              onChange={setDestination}
              label="To"
              placeholder="Destination"
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <Autocomplete
              variant='filled'
              size='lg'
              data={['Mon', 'Tue', 'Wed', "Thu", "Fri", "Sat", "Sun"]}
              value={day}
              required
              onChange={setDay}
              label="Enter the Day"
              placeholder="Day"
            />
          </Grid.Col>
        </Grid>
            <Center>
              <Button size='lg' onClick={() => navigate(`/flight/${source}/${destination}/${day}`)}>Search Flights</Button>
            </Center>
      </Paper>
    </Container>
  )
}

export default SearchFlights
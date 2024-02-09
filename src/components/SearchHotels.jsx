import { Button, Container, Grid, Paper, Select, Stack, rem } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const data = [
  "Mumbai",
  "Pune",
  "Jaipur",
  "Ahmedabad",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Lucknow",
  "Agra",
  "Chandigarh",
  "Surat",
  "Varanasi",
  "Amritsar",
  "Nagpur",
  "Nashik",
  "Aurangabad",
  "Udiapur"
]

const SearchHotels = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  return (
    <Container p={rem(20)}>
      <Paper p={rem(20)} shadow='sm' >
        <Grid>
          <Grid.Col span={8}>
            <Select variant='filled' placeholder='Find the Hotels with City' maxDropdownHeight={200} data={data} value={location} onChange={setLocation} />
          </Grid.Col>
          <Grid.Col span={4}>
            <Stack>
              <Button onClick={() => navigate(`/hotels/${location}`)}>Search Hotels</Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  )
}

export default SearchHotels
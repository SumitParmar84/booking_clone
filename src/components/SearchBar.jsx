import { ActionIcon,  Autocomplete,  Container, rem, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";

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



const Search = () => {
    const navigate = useNavigate();
    const [location,setLocation] = useState("");
    const theme = useMantineTheme();
  return (
    <Container>
           <Autocomplete
            data={data}
            maxDropdownHeight={150}
            radius="xl"
            size="md"
            value={location}
            onChange={setLocation}
            placeholder="Search the city you want"
            rightSectionWidth={42}
            leftSection={<IoSearchOutline style={{ width: rem(18), height: rem(18) }} />}
            rightSection={
          <ActionIcon onClick={()=>navigate(`/hotels/${location}`)} size={32} radius="xl" color={theme.primaryColor} variant="filled">
            <BiRightArrowAlt style={{ width: rem(18), height: rem(18) }}/>
          </ActionIcon>
      }
      />
    </Container>
  )
}

export default Search;
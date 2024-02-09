import { Container, Space, rem } from '@mantine/core'
import SearchHotels from '../../components/SearchHotels';
import OffersHotels from '../../components/OffersHotels';
import { useDocumentTitle } from '@mantine/hooks';

const Hotels = () => {
  useDocumentTitle("Hotels")
  return (
    <Container>
      <SearchHotels/>
      <Space h={rem(5)} />
      <OffersHotels/>
    </Container>
  )
}

export default Hotels
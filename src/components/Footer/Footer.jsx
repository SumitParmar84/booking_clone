import React from 'react'
import './footer.css';
import { Container, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
const Footer = () => {
  return (
    <Paper bg='#f5f5f5' py={20}>
      <Container>
        <SimpleGrid cols={5} spacing="lg">
          <Stack gap="lg">
            <Text fw={"bold"}>Support</Text>
            <Stack gap={10}>
              <Text size='sm'>Coronavoirus (COVID-19) FAQs</Text>
              <Text size='sm'>Manage your trips</Text>
              <Text size='sm'>Customer Service Help</Text>
              <Text size='sm'>Safety resource center</Text>
            </Stack>
          </Stack>
          <Stack gap="lg">
            <Text fw={"bold"}>Discover</Text>
            <Stack gap={10}>
              <Text size='sm'>Genius loyalty programme</Text>
              <Text size='sm'>Seasonal and holiday deals</Text>
              <Text size='sm'>Travel articles</Text>
              <Text size='sm'>Booking.com for Business</Text>
              <Text size='sm'>Traveller Review Awards</Text>
              <Text size='sm'>Car hire</Text>
              <Text size='sm'>Flight finder</Text>
              <Text size='sm'>Restaurant reservations</Text>
              <Text size='sm'>Booking.com for Travel Agents</Text>
            </Stack>
          </Stack>
          <Stack gap="lg">
            <Text fw={"bold"}>Terms and settings</Text>
            <Stack gap={10}>
            <Text size='sm'>Privacy & cookies</Text>
              <Text size='sm'>Terms and conditions</Text>
              <Text size='sm'>MSA Statement</Text>
            </Stack>
          </Stack>
          <Stack gap="lg">
            <Text fw={"bold"}>Partners</Text>
            <Stack gap={10}>
            <Text size='sm'>Extranet login</Text>
              <Text size='sm'>Partner help</Text>
              <Text size='sm'>List your property</Text>
              <Text size='sm'>Become an affiliate</Text>
            </Stack>
          </Stack>
          <Stack gap="lg">
            <Text fw={"bold"}>About</Text>
            <Stack gap={10}>
            <Text size='sm'>About Booking.com</Text>
              <Text size='sm'>How we work</Text>
              <Text size='sm'>Sustainability</Text>
              <Text size='sm'>Press centre</Text>
              <Text size='sm'>Careers</Text>
              <Text size='sm'>Investor relations</Text>
              <Text size='sm'>Corporate contact</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Paper>
  )
}

export default Footer

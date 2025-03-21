'use client'

import {
  Box,
  Container,
  Grid,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { LuCheckCircle } from 'react-icons/lu'

import { HighlightsItem } from '#components/highlights'
import { SectionTitle } from '#components/section'

import { description, title } from './constant'
import { trainings } from './data'

const TrainingSection = () => {
  return (
    <Box position="relative" overflow="hidden" id="training">
      <SectionTitle title={title} description={description} />
      <Container maxW="container.xl" w="auto" pb="40">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(8, 1fr)' }}
        >
          <HighlightsItem
            colSpan={{ base: 1, lg: 6 }} // 1 colonne sur base, 2 sur lg
            colStart={{ lg: 2 }} // Commence à la 2ème colonne sur lg
            display="block"
            justifyContent="center"
          >
            {trainings.map((training) => (
              <Box as="div" display="flex" alignItems="center" py="5">
                <Text color="gray.600" whiteSpace="nowrap" pr="4">
                  {training.date}
                </Text>
                <Box
                  as="blockquote"
                  borderLeft="4px solid"
                  borderColor="purple.500"
                  gap="10"
                  p="4"
                  width="full"
                >
                  <Text fontSize="xl">{training.degree}</Text>
                  <Text color="gray.600">{training.establishment}</Text>
                  <List fontStyle="normal" color="gray.500" pt="5">
                    {training.skills.map((skill) => (
                      <ListItem>
                        <ListIcon color="green.500">
                          <LuCheckCircle />
                        </ListIcon>
                        {skill}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            ))}
          </HighlightsItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default TrainingSection

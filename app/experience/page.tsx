'use client'

import {
  Box,
  Container,
  Grid,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  Wrap,
} from '@chakra-ui/react'
import {
  IconBadge,
  Timeline,
  TimelineContent,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
  TimelineTrack,
} from '@saas-ui/react'
import Image from 'next/image'
import { LuCheckCircle, LuShip } from 'react-icons/lu'

import { HighlightsItem } from '#components/highlights'
import { SectionTitle } from '#components/section'

import { description, title } from './constant'
import { experiences } from './data'

const ExperienceSection = () => {
  return (
    <Box position="relative" overflow="hidden" id="experiences">
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
            {experiences.map((experience) => (
              <Box as="div" display="flex" alignItems="center" py="5">
                <Box flex="0 0 25%" pr="4">
                  <Text color="gray.600">{experience.date}</Text>
                </Box>
                <Box
                  as="blockquote"
                  borderLeft="4px solid"
                  borderColor="purple.500"
                  gap="10"
                  p="4"
                  width="full"
                >
                  <Text fontSize="xl">{experience.position}</Text>
                  <Text color="gray.600">{experience.company}</Text>
                  <List fontStyle="normal" color="gray.500" pt="5">
                    {experience.responsibilities.map((responsibility) => (
                      <ListItem>
                        <ListIcon color="green.500">
                          <LuCheckCircle />
                        </ListIcon>
                        {responsibility}
                      </ListItem>
                    ))}
                  </List>
                  <Wrap mt="5">
                    {experience.skills.map((skill) => (
                      <Tag
                        key={skill}
                        variant="subtle"
                        colorScheme="purple"
                        rounded="full"
                        px="3"
                      >
                        {skill}
                      </Tag>
                    ))}
                  </Wrap>
                </Box>
              </Box>
            ))}
          </HighlightsItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default ExperienceSection

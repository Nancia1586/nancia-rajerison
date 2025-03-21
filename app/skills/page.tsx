'use client'

import { Box, Container, Grid } from '@chakra-ui/react'
import Image from 'next/image'

import { SectionTitle } from '#components/section'

import { description, title } from './constant'
import { skillImages } from './data'

const SkillSection = () => {
  return (
    <Box position="relative" overflow="hidden">
      <SectionTitle title={title} description={description} />
      <Container maxW="container.xl" w="auto" pb="40">
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
          placeItems="center"
          rowGap={{ base: '4', lg: '6' }}
        >
          {skillImages.map((image) => (
            <Box
              _hover={{
                transform: 'scale(1.1) translateY(-5px)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.alt}
                quality="75"
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default SkillSection

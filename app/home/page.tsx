import {
  Box,
  ButtonGroup,
  Container,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'

import { ButtonLink } from '#components/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Em } from '#components/typography'

const HomeSection = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 35, lg: 35 }} pb="40">
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          paddingTop={{ base: 0, lg: 20 }}
        >
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                <Text>
                  Salut, moi c'est
                  <Br /> Nancia Rajerison
                </Text>
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Bienvenue ! Je suis <Em>Nancia Rajerison</Em>, développeuse
                fullstack animée par la passion du code. Je maîtrise le
                développement de bout en bout pour transformer vos visions en
                applications performantes.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center" pt="10">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Me contacter
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FaDownload}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    />
                  }
                >
                  Télécharger mon CV
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="450px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="450px"
            margin="0 auto"
            bg="white"
            rounded="full"
            border="4px solid" // Bordure violette
            borderColor="purple.500" // Couleur de la bordure
            boxShadow="0 0 20px 5px rgba(139, 92, 246, 0.5)" // Effet lumineux violet
            overflow="hidden" // Assure que l'image ne déborde pas
          >
            <FallInPlace delay={1}>
              <Box height="100%" rounded="full" overflow="hidden">
                <Image
                  src="/static/images/profile.jpg"
                  width={400}
                  height={500}
                  alt="Nancia Rajerison profile picture"
                  quality="75"
                  priority
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Image bien ajustée
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default HomeSection

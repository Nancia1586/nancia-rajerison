'use client'

import { Box } from '@chakra-ui/react'

import HomeSection from './home/page'
import TrainingSection from './training/page'

export default function Page() {
  return (
    <Box>
      <HomeSection />

      <TrainingSection />

      {/* <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection /> */}
    </Box>
  )
}

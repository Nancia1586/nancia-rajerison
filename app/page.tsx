'use client'

import { Box } from '@chakra-ui/react'

import HomeSection from './home/page'
import SkillSection from './skills/page'
import TrainingSection from './training/page'

export default function Page() {
  return (
    <Box>
      <HomeSection />

      <TrainingSection />

      <SkillSection />

      {/* <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection /> */}
    </Box>
  )
}

'use client'

import { Box } from '@chakra-ui/react'

import ExperienceSection from './experience/page'
import HomeSection from './home/page'
import SkillSection from './skills/page'
import TrainingSection from './training/page'

export default function Page() {
  return (
    <Box>
      <HomeSection />

      <TrainingSection />

      <SkillSection />

      <ExperienceSection />

      {/* <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection /> */}
    </Box>
  )
}

import { AccordionDemo } from '@/components/Accodion'
import PricingHero from '@/components/PricingHero'
import PricingReview from '@/components/PricingReview'
import PricingComparison from '@/components/Table'
import React from 'react'

const Pricingpage = () => {
  return (
    <>
    <PricingHero/>
    <PricingComparison/>
    <PricingReview/>
    <AccordionDemo/>
    </>
  )
}

export default Pricingpage
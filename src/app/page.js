import Featured from '@/components/Featured'
import Hero_Section from '@/components/Hero_Section'
import Offer from '@/components/Offer'
import React from 'react'

export default function home() {
  return (
    <main className=''>
      <Hero_Section></Hero_Section>
      
      <Featured></Featured>
      <Offer></Offer>


    </main>
  )
}

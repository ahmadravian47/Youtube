import React from 'react'

import Hero from '../hero/Hero'
import Section1 from '../section1/Section1'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'
import Section4 from '../section4/Section4'
import Footer from '../footer/Footer'

export default function Home() {
    return (
        <div>
            <Hero></Hero>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Footer></Footer>
        </div>
    )
}

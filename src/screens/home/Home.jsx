
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import bgimg from '../../assets/images/sitebg.jpg'
import HeroSection from '../../components/home/HeroSection'
import Pics from '../../components/home/Pics'
import GettingStarted from '../../components/GettingStarted'
import Stats from '../../components/Stats'

const Home = () => {
    return (
        <VStack
            backgroundImage={bgimg}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundAttachment="fixed"
            h="full"
            w="full"
        >
            <HeroSection />
            <Pics />
            <Stats />
            <GettingStarted />
        </VStack>
    )
}

export default Home

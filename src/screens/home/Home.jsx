
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import bgimg from '../../assets/images/sitebg.jpg'
import HeroSection from '../../components/home/HeroSection'
import Pics from '../../components/home/Pics'
import Stats from '../../components/home/Stats'
import FeaturedCollections from '../../components/home/FeaturedCollections'
import GettingStarted from '../../components/home/GettingStarted'

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
            <FeaturedCollections />
            <GettingStarted />
        </VStack>
    )
}

export default Home

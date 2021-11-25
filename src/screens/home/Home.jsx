
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import bgimg from '../../assets/images/sitebg.jpg'
import HeroSection from '../../components/home/HeroSection'
import Pics from '../../components/home/Pics'

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
        </VStack>
    )
}

export default Home

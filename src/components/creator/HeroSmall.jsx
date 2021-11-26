import React from 'react'

import { Container, VStack } from '@chakra-ui/layout'
import herobg from '../../assets/images/sitebg.jpg'


const HeroSmall = () => {
    return (
        <Container maxW='full' p='0'>

            <VStack minH='220px' w='100%' bgImage={herobg} backgroundRepeat='no-repeat' backgroundPosition='center' backgroundSize='cover'>
            </VStack>

        </Container>
    )
}

export default HeroSmall

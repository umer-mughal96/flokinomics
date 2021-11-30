import React from 'react'
import { HStack, Heading, VStack, Flex, Spacer } from '@chakra-ui/layout'
import GetStartedCard from './getStartedCards/GetStartedCard'


const GettingStarted = () => {
    return (
        <VStack w="full" m="auto" p="0px" m="0px">
            <Heading as="h2"  fontSize={{base: 'lg', md: '2xl', lg: '3xl'}} textAlign='center' pb='40px' color="white">How to Get Started</Heading>
            <Flex flexWrap={{base: 'nowrap', md: 'wrap', xl: 'nowrap'}} h='auto' pb="14" w="full" m="auto" 
            d={{base: 'block', md: 'flex', lg: 'flex', xl: 'flex'}} px={{ base: '2', md: '7', lg: '10' }}>
                <GetStartedCard isAddWallet={true} /> 
                {/* <Spacer /> */}
                <GetStartedCard isCreateCollection={true} />
                {/* <Spacer /> */}
                <GetStartedCard isAddCollection={true} />
                {/* <Spacer /> */}
                <GetStartedCard isSellItem={true} />
            </Flex>
        </VStack>
    )
}

export default GettingStarted

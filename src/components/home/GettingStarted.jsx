import React from 'react'
import { HStack, Heading, VStack, Flex, Spacer } from '@chakra-ui/layout'
import GetStartedCard from './getStartedCards/GetStartedCard'


const GettingStarted = () => {
    return (
        <VStack w="full" m="auto">
            <Heading as="h2" size="xl" textAlign='center' pb='40px' color="white">How to Get Started</Heading>
            <Flex h='auto' pb="14" w="full" m="auto" px={{ base: '2', md: '7', lg: '20' }}>
                <GetStartedCard isAddWallet={true} />
                <Spacer />
                <GetStartedCard isCreateCollection={true} />
                <Spacer />
                <GetStartedCard isAddCollection={true} />
                <Spacer />
                <GetStartedCard isSellItem={true} />
            </Flex>
        </VStack>
    )
}

export default GettingStarted

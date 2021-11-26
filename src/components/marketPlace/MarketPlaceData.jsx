import React from 'react'
import Products from './Products'
import { VStack, Text, Flex, Spacer } from '@chakra-ui/layout'


const MarketPlaceData = () => {
    return (
        <VStack w="75%" alignItems="flex-start">
            <Text color="white">
                MarketPlaceData
            </Text>
            <Flex flexWrap="wrap">
                <Products />
                {/* <Spacer /> */}
            </Flex>
        </VStack>
    )
}

export default MarketPlaceData

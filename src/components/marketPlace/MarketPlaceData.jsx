import React from 'react'
import Products from './Products'
import { VStack, Text, Flex, Spacer, HStack, Heading } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'

const MarketPlaceData = ({ isCollections }) => {
    return (
        <VStack w="75%" alignItems="flex-start" px="5">
            <HStack justifyContent="space-between" w="full" pt="9">
                <HStack>
                    <Heading as="h6" size="xs" color="white">{isCollections ? "6 Results" : "1,490,743 Results"}</Heading>
                </HStack>
                <HStack>
                    <Select placeholder="All Items" color="white">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <Select placeholder="Sort By" bg='transparent'
                        borderColor='tomato'
                        color='white'>
                        <option value="option1" bgColor="red">Option 1</option>
                        <option value="option2" bgColor="red">Option 2</option>
                        <option value="option3" bgColor="red">Option 3</option>
                    </Select>
                </HStack>
            </HStack>
            <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between" w="full" m="auto">
                <Products />
            </Flex>
        </VStack>
    )
}

export default MarketPlaceData

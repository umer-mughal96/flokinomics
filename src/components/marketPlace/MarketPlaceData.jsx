import React, { useState } from 'react'
import Products from './Products'
import { VStack, Flex, HStack, Heading, Text } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import MobileSideBar from '../sideBar/MobileSideBar'
import { HamburgerIcon } from '@chakra-ui/icons'

const MarketPlaceData = ({ isCollections }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <VStack w={{ base: '100%', md: '100%', lg: '75%' }} alignItems="flex-start" px="5" >
            <HStack justifyContent="space-between" w="full" pt="9" d={{ base: 'block', md: 'block', lg: 'flex' }}>
                <HStack justifyContent="space-between" alignItems="center">
                    <Flex mb="3" alignItems="center" >
                        <HamburgerIcon color="white" size="lg" d={{ base: 'block', md: 'block', lg: 'none' }} onClick={() => setIsOpen(true)} />
                        <Text ml="2" color="white">
                            Marketplase menu
                        </Text>
                        {
                            isOpen ?
                                // <MobileSideBar setIsOpen={()=> setIsOpen(false)} isOpen={isOpen} />
                                <MobileSideBar setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
                                : null
                        }
                    </Flex>
                    <Flex flex="1" >
                        <Heading as="h6" textAlign="right" size="xs" color="white">{isCollections ? "6 Results" : "1,490,743 Results"}</Heading>
                    </Flex>
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

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
            <Flex justifyContent="space-between" w="full" alignItems="center" mt="9" d={{ base: 'block', md: 'block', lg: 'flex' }} >
                <Flex w={{base: '100%', md: '50%'}} mb={{ base: '4', md: '0px' }} justifyContent="space-between" alignItems="center">

                    <HamburgerIcon boxSize="6" color="white" size="lg" d={{ base: 'block', md: 'block', lg: 'none' }} onClick={() => setIsOpen(true)} />
                    {/* <Text ml="2" color="white">
                            Market Menu
                        </Text> */}
                    {
                        isOpen ?
                            // <MobileSideBar setIsOpen={()=> setIsOpen(false)} isOpen={isOpen} />
                            <MobileSideBar setIsOpen={() => setIsOpen(false)} isOpen={isOpen} />
                            : null
                    }

                    <Text textAlign="right" color="white">{isCollections ? "6 Results" : "1,490,743 Results"}</Text>

                </Flex>
                <Flex w={{base: '100%', md: '50%'}} justifyContent="space-between">
                    <Select placeholder="All Items"
                        color='white' w="48%">
                        <option style={{backgroundColor:"black"}} value="option1">Option 1</option>
                        <option style={{backgroundColor:"black"}} value="option2">Option 2</option>
                        <option style={{backgroundColor:"black"}} value="option3">Option 3</option>
                    </Select>
                    <Select placeholder="Sort By" bg='transparent' w="48%"
                        color='white'>
                        <option style={{backgroundColor:"black"}} value="option1">Option 1</option>
                        <option style={{backgroundColor:"black"}} value="option2">Option 2</option>
                        <option style={{backgroundColor:"black"}} value="option3">Option 3</option>
                    </Select>
                </Flex>
            </Flex>
            <Flex flexWrap="wrap" alignItems="center" justifyContent="space-between" w="full" m="auto">
                <Products />
            </Flex>
        </VStack>
    )
}

export default MarketPlaceData

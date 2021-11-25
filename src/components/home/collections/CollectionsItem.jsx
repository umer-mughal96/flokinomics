import React from 'react'
import { HStack, Flex, Text, Box } from '@chakra-ui/layout'
import pic1 from '../../../assets/images/arrayimg.jpg'

const CollectionsItem = ({isMovers, isNewest}) => {
    const picsData = [
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        }, {
            picImg: pic1,
            picTitle: 'Seasonal'
        }, {
            picImg: pic1,
            picTitle: 'Seasonal'
        }, {
            picImg: pic1,
            picTitle: 'Seasonal'
        }, {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
    ]
    return (
        <HStack w="full" w="red" h="full" alignItems="flex-start">
            <Box
                borderRadius="lg"
                bgColor="#1d1d1d"
                h="150px"
                w={{base: '10%', md: '20%'}}
                my="4"
            >
                <Flex w="full" h="full" alignItems="center" justifyContent="center">
                    <Text color="white" fontSize="sm" py="1.5" w="full" textAlign="center"> {isMovers ? "Top Movers" : isNewest?  "Newest Collections" : "Hot Collections"}</Text>
                </Flex>
            </Box>
            <HStack overflow="auto" spacing='4' className="collections-slider" w={{ base: '90%', md: '80%' }} m="auto" >
                {picsData.map((data, index) =>
                    <Box
                        backgroundImage={data.picImg}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        borderRadius="lg"
                        h="150px"
                        minWidth="200px"
                        my="4"
                        key={index}
                    >
                        <Flex w="full" h="full" alignItems="flex-end" justifyContent="flex-end">
                            <Text bgColor="#4b4a4b" color="white" opacity="0.8" borderBottomLeftRadius="lg"
                                borderBottomRightRadius="lg" fontSize="xs" py="1.5" w="full" textAlign="center">{data.picTitle}</Text>
                        </Flex>
                    </Box>
                )}
            </HStack>
        </HStack>
    )
}

export default CollectionsItem

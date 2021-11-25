import React from 'react'
import { HStack, VStack, Flex, Text, Heading, Box } from '@chakra-ui/layout'
import pic1 from '../../assets/images/arrayimg.jpg'

const Pics = () => {

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
    ]
    return (
        <VStack pb="9">
            <Heading my="5" color="white">Our Pics</Heading>
            <Flex flexWrap='wrap' w={{base: '90%', md: '80%', lg: '70%'}} m="auto" alignItems="center" justifyContent="space-evenly">
                {picsData.map((data, index) =>
                    <Box
                        backgroundImage={data.picImg}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        borderRadius="lg"
                        h="150px"
                        w="200px"
                        my="4"
                        key={index}
                    >
                        <Flex w="full" h="full" alignItems="flex-end" justifyContent="flex-end">
                            <Text bgColor="#4b4a4b" color="white" opacity="0.8" borderBottomLeftRadius="lg"
                                borderBottomRightRadius="lg" fontSize="xs" py="1.5" w="full" textAlign="center">{data.picTitle}</Text>
                        </Flex>
                    </Box>
                )}
            </Flex>
        </VStack>
    )
}

export default Pics

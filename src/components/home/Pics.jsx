import React from 'react'
import { HStack, VStack, Flex, Text, Heading, Box } from '@chakra-ui/layout'
import pic1 from '../../assets/images/dubai.jpg'
import pic2 from '../../assets/images/beach.jpg'
import pic3 from '../../assets/images/tree.jpg'
import pic4 from '../../assets/images/watefall.jpg'
import pic5 from '../../assets/images/garden.jpg'
import pic6 from '../../assets/images/dubai.jpg'
import pic7 from '../../assets/images/montain.jpg'
import pic8 from '../../assets/images/piccard.jpg'

const Pics = () => {

    const picsData = [
        {
            picImg: pic1,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic2,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic3,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic4,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic5,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic6,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic7,
            picTitle: 'Seasonal'
        },
        {
            picImg: pic8,
            picTitle: 'Seasonal'
        },
    ]
    return (
        <VStack pb="9">
            <Heading my="5" color="white">Our Pics</Heading>
            <Flex flexWrap='wrap' w={{base: '100%', md: '100%', lg: '80%'}} m="auto" alignItems="center" justifyContent="space-evenly">
                {picsData.map((data, index) =>
                    <Box
                        backgroundImage={data.picImg}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        borderRadius="lg"
                        h="170px"
                        w={{base: '90%', md: '260px'}}
                        my="1"
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

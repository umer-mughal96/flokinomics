import { Box, Text, VStack, HStack } from '@chakra-ui/layout'
import React from 'react'
import bgimg from '../../assets/images/sitebg.jpg'
import { Image } from "@chakra-ui/react"

const CollectionsName = ({ iscollectiondetail }) => {
    return (
        <VStack
            w="full"
            position="relative"
            h="130px"
            mb={iscollectiondetail? '1' : '0px'}
            >
            <Box
                backgroundImage={bgimg}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                h="20"
                w="full"
            />
            <HStack
                alignItems="center"
                position="absolute"
                left="0px"
                top="15px"
                h="full"
                w="full"
                px="6"
            >
                <Image
                    boxSize="60px"
                    borderRadius="xl"
                    objectFit="cover"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                />
                <Box color="white" pt="10" pl="5">
                    <Text textAlign="left" size="lg">Artist Person</Text>
                    <Text fontSize="sm" color="gray">@Artist Person</Text>
                </Box>
            </HStack>
        </VStack >
    )
}

export default CollectionsName

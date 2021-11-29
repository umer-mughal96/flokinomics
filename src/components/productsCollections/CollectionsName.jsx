import { Box, Text, VStack, HStack } from '@chakra-ui/layout'
import React from 'react'
import bgimg from '../../assets/images/sitebg.jpg'
import { Image } from "@chakra-ui/react"

const CollectionsName = () => {
    return (
        <VStack
            // pt="72px"
            w="full"
            position="relative"
            // bgColor="red"
            h="150px"
        >
            <Box
                backgroundImage={bgimg}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                h="20"
                w="full"
            />
            <HStack
                position="absolute"
                alignItems="center"
                left="0px"
                top="15px"
                h="full"
                w="full"
                px="4"
            >
                <Image
                    boxSize="70px"
                    borderRadius="xl"
                    objectFit="cover"
                    src="https://bit.ly/sage-adebayo"
                    alt="Segun Adebayo"
                />
                <Box color="white" pt="3" pl="5">
                    <Text textAlign="left" size="lg">Artist Person</Text>
                    <Text fontSize="sm" color="gray">@Artist Person</Text>
                </Box>
            </HStack>
        </VStack>
    )
}

export default CollectionsName

import { Box, Text, VStack, HStack } from '@chakra-ui/layout'
import React from 'react'
import { Image } from "@chakra-ui/react"

const CollectionDetail = () => {
    return (
        <>  
            <hr style={{ height: '1px', width: '100%' }} />
            <VStack w="full">
                <HStack
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
                    <VStack color="white" pt="3" pl="5" h="full" w="full" alignItems="flex-start">
                        <Text textAlign="left" size="lg">Artist Person</Text>
                        <Text fontSize="xs" color="gray">@Artist Person</Text>
                    </VStack>
                </HStack>
            </VStack>
            <VStack>
                <Text color="white" fontSize="xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </VStack>
        </>
    )
}

export default CollectionDetail

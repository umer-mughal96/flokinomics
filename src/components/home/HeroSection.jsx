import React from 'react'
import { Image } from '@chakra-ui/image'
import { HStack, VStack, Flex, Text, Heading } from '@chakra-ui/layout'
import { InfoIcon, Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, ButtonGroup } from '@chakra-ui/button'

import gods from '../../assets/images/herodogs.png'


const HeroSection = () => {
    return (
        <VStack py="28" px="28" bgGradient="linear(to-r, #00193f, #00193f54)" h="90vh" w="full" >
            <Flex alignItems="flex-start" w="full" h="full">
                <VStack w={{ base: '10%', md: '15%', lg: '20%' }} h="full" px="4">
                    <Image
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        src={gods}
                        alt="Flokinomics dogs"
                    />
                </VStack>
                <VStack w={{ base: '90%', md: '85%', lg: '80%' }} alignItems="flex-start" color="white" spacing="7">
                    <Text>
                        Create, Explore, and Collect Digital NFTs, as well connecting artists and collectors
                    </Text>
                    <Heading as="h2" size="2xl">
                        The #1 Commnuity-Focused NFT Marketplace
                    </Heading>
                    <InputGroup size="lg" bgColor="white" borderRadius="md" color="black" w={{ base: '90%', md: '70%', lg: '70%' }}>
                        <Input
                            pr="4.5rem"
                            type="text"
                            placeholder="Search item, Collections and Users"
                        />
                        <InputRightElement >
                            <Search2Icon />
                        </InputRightElement>
                    </InputGroup>
                    <ButtonGroup variant="outline" spacing="6">
                        <Button borderRadius="full" fontWeight="100" bgColor="#334765">Explore Marketplace</Button>
                        <Button borderRadius="full" fontWeight="100" bgColor="#334765">Buy $FLOIN</Button>
                    </ButtonGroup>
                </VStack>
            </Flex>
            <HStack spacing="3">
                <Text color="white">Supported Blockchains</Text>
                <HStack color="white">
                    <InfoIcon />
                    <InfoIcon />
                    <InfoIcon />
                    <InfoIcon />
                </HStack>
            </HStack>
        </VStack>
    )
}

export default HeroSection

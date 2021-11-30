import React from 'react'
import { Image } from '@chakra-ui/image'
import { HStack, VStack, Flex, Text, Heading } from '@chakra-ui/layout'
import { InfoIcon, Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, ButtonGroup } from '@chakra-ui/button'
import gods from '../../assets/images/herodogs.png'
import ethereum from '../../assets/images/ethereum.png'


const HeroSection = () => {
    return (
        <VStack py={{ base: '3', md: '10', lg: '20' }} px={{ base: '3', md: '10', lg: '20' }} 
        bgGradient="linear(to-r, #00193f, #00193f54)" alignItems="center" justifyContent="flex-end" pb="10" h={{base: '110vh', md: '130vh'}} 
        w="full" >
            <Flex alignItems="center" w="full" h={{base: 'auto', md: 'full', lg: 'full'}} pb="14">
                <VStack w={{ base: '10%', md: '15%', lg: '15%' }} h="xs" px="4" d={{ base: 'none', md: 'none', lg: 'block' }}>
                    <Image
                        w="100%"
                        h="100%"
                        // objectFit="cover"
                        src={gods}
                        alt="Flokinomics dogs"
                    />
                </VStack>
                <VStack w={{ base: '100%', md: '100%', lg: '80%' }} pl={{ base: '0px', md: '0px', lg: '5' }} alignItems="flex-start" 
                color="white" spacing="7">
                    <Text fontWeight="100" fontSize={{ base: '15px', md: '19px', lg: '22px' }}>
                        Create, Explore, and Collect Digital NFTs, as well connecting artists and collectors
                    </Text>
                    <Heading as="h1" lineHeight={{ base: '20px', md: '35px', lg: '65px' }} fontSize={{ base: 'sm', md: '3xl', lg: '5xl' }}>
                        The #1 Commnuity-Focused NFT Marketplace
                    </Heading>
                    <InputGroup height={{ base: '45px', md: '45px', lg: '50px' }} bgColor="white" borderRadius="md" color="black"
                     w={{ base: '100%', md: '100%', lg: '70%' }}>
                        <Input
                            height="full"
                            pr="4.5rem"
                            fontSize={{ base: '15px', md: '20px', lg: '20px' }}
                            type="text"
                            placeholder="Search item, Collections and Users"
                        />
                        <InputRightElement height="full">
                            <Search2Icon fontSize={{ base: '13px', md: '20px', lg: '20px' }} color="gray" />
                        </InputRightElement>
                    </InputGroup>
                    <Flex variant="outline" justifyContent="space-evenly" w={{base: '100%', md: '60%', lg: 'auto'}} lignItems="center" 
                     d={{base: 'block', md: "flex", lg: "flex"}} >
                        <Button borderRadius="full" mr={{base: '0px', md: '10px', lg: '30px'}} w={{ base: '100%', md: '200px' }} border="2px" fontWeight="100" bgColor="#334765"
                            _hover={{ bg: 'transparent' }} mb={{base: '5', md: '0px', lg: '0px'}}>Explore Marketplace</Button>
                        <Button borderRadius="full" w={{ base: '100%', md: '200px' }} border="2px" fontWeight="100" bgColor="#334765"
                            _hover={{ bg: 'transparent' }} >Buy $FLOIN</Button>
                    </Flex>
                </VStack>
            </Flex>
            <Flex d={{ base: 'block', md: 'block', lg: 'flex' }}  w={{base: 'full', md: '50%', lg: '45%'}} alignItems="center" justifyContent="space-between">
                <Text color="white" textAlign="center"  w="full">Supported Blockchains</Text>
                <HStack color="white" spacing="9" w="full" alignItems="center" justifyContent="center">
                    <Image src={ethereum} w={10} h={10} />
                    <Image src={ethereum} w={10} h={10} />
                    <Image src={ethereum} w={10} h={10} />
                    <Image src={ethereum} w={10} h={10} />
                </HStack>
            </Flex>
        </VStack>
    )
}

export default HeroSection

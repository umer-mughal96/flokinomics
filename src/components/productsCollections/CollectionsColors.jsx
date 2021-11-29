import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Box, VStack, HStack, Text } from '@chakra-ui/layout'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { SearchIcon } from '@chakra-ui/icons'
import { Input } from "@chakra-ui/react"

const CollectionsColors = () => {
    return (
        <VStack w="full">
            <Accordion allowToggle w="full" color="white">
                <AccordionItem borderTop="none">
                    <h2>
                        <AccordionButton >
                            <Box flex="1" textAlign="left">
                                Collection
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <VStack alignItems="flex-start">
                            <InputGroup size="md">
                                <Input
                                    placeholder="search"
                                    bgColor="black"
                                    borderRadius="3px"
                                />
                                <InputRightElement>
                                    <Button _hover={{ color: "white", bgColor: "black" }}
                                        _focus={{
                                            color: "white", bgColor: "black"
                                        }}
                                        _active={{
                                            color: "white", bgColor: "black"
                                        }}
                                        size="sm" p="0px"
                                        bgColor="transparent">
                                        <SearchIcon />
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <VStack pt="4">
                                <HStack>
                                    <Box w="10" h="10" borderRadius="full" bgGradient="linear(to-r, green.200, pink.500)" />
                                    <Text>Collection 1</Text>
                                </HStack>
                                <HStack>
                                    <Box w="10" h="10" borderRadius="full" bgGradient="linear(to-r, green.200, pink.500)" />
                                    <Text>Collection 2</Text>
                                </HStack>
                                <HStack>
                                    <Box w="10" h="10" borderRadius="full" bgGradient="linear(to-r, green.200, pink.500)" />
                                    <Text>Collection 3</Text>
                                </HStack>
                                <HStack>
                                    <Box w="10" h="10" borderRadius="full" bgGradient="linear(to-r, green.200, pink.500)" />
                                    <Text>Collection 4</Text>
                                </HStack>
                                <HStack>
                                    <Box w="10" h="10" borderRadius="full" bgGradient="linear(to-r, green.200, pink.500)" />
                                    <Text>Collection 5</Text>
                                </HStack>
                            </VStack>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}

export default CollectionsColors

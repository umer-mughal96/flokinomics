import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Box, VStack } from '@chakra-ui/layout'
import { Checkbox } from '@chakra-ui/checkbox'

const Categories = () => {
    return (
        <VStack w="full">
            <Accordion allowToggle w="full" color="white">
                <AccordionItem borderTop="none">
                    <h2>
                        <AccordionButton >
                            <Box flex="1" textAlign="left">
                                Categories
                            </Box>
                            <AccordionIcon bg='white' color='black' borderRadius='50%' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <VStack alignItems="flex-start">
                            <Checkbox size="sm" colorScheme="black">
                                ArtWork
                            </Checkbox>
                            <Checkbox size="sm" colorScheme="black">
                                Music
                            </Checkbox>
                            <Checkbox size="sm" colorScheme="black">
                                Trading Cards
                            </Checkbox>
                            <Checkbox size="sm" colorScheme="black">
                                Collectibles
                            </Checkbox>
                            <Checkbox size="sm" colorScheme="black">
                                Utilities
                            </Checkbox>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}

export default Categories

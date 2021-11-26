import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Box, Text, VStack } from '@chakra-ui/layout'

const FilterComp = () => {
    return (
        <VStack w="full">
            <Accordion allowToggle w="full" color="white">
                <AccordionItem borderTop="none">
                    <h2>
                        <AccordionButton >
                            <Box flex="1" textAlign="left">
                                Filter
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text>Something missing here</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}

export default FilterComp

import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/accordion'
import { Box, VStack } from '@chakra-ui/layout'
import { Checkbox } from '@chakra-ui/checkbox'

const Payment = () => {
    return (
        <VStack w="full">
            <Accordion allowToggle w="full" color="white">
                <AccordionItem borderTop="none">
                    <h2>
                        <AccordionButton >
                            <Box flex="1" textAlign="left">
                                Payment
                            </Box>
                            <AccordionIcon bg='white' color='black' borderRadius='50%' />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <VStack alignItems="flex-start">
                            <Checkbox size="sm" colorScheme="black">
                                BNB
                            </Checkbox>
                            <Checkbox size="sm" colorScheme="black">
                                FLOKIN
                            </Checkbox>
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}

export default Payment

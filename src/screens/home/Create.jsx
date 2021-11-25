import React from 'react'
import { Stack, Box, HStack, VStack, Heading, Container } from '@chakra-ui/layout'
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/accordion'
import { Input } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/slider'

import { Text } from '@chakra-ui/layout'

import { Button } from '@chakra-ui/button'

import { } from '@chakra-ui/slider'
import { AddIcon } from '@chakra-ui/icons'
const Create = () => {
    return (
        <Container maxW='1000px' bg='transparent'>
            <Stack direction={["column", "row"]} spacing="24px" py='100px'>
                <Box w='30%' textAlign='center' borderRadius='8px' >
                    <Box p='2' bg='#1d1d1d' color='white' marginBottom='16px' borderRadius='6px'>
                        <Box border='1px dashed #ccc' borderRadius='8px'>
                            <AddIcon fontSize='34px' my='4' />
                            <Input border='none' type='file' variant="outline" placeholder="Outline" />
                            <Text>Choose File or Drag and Drop</Text>
                        </Box>
                    </Box>
                    <Accordion allowToggle >
                        <AccordionItem borderRadius='6px' mb="2" bg='#1d1d1d' color='white'>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        NFT Type
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        
                        <AccordionItem borderRadius='6px'  mb="2" bg='#1d1d1d' color='white'>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Category
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem borderRadius='6px'  mb="2" bg='#1d1d1d' color='white'>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Collection
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Box w='30%' >
                    <Input variant="outline" placeholder="Title" bg='#1d1d1d' />
                    <Textarea placeholder='Description' my='3' rows='5' bg='#1d1d1d' />
                    <Heading as="h3" size='md' py='2'>Royalities</Heading>
                    <Slider aria-label="slider-ex-1" defaultValue={30}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>
                <Box w="30%">
                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem bg='#1d1d1d' color='white' borderRadius='6px'>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Sales Type
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Button>Create NFT</Button>
                </Box>
            </Stack>
        </Container>
    )
}

export default Create

import React from 'react'
import { Box, HStack, VStack, Container, Heading } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Text, Flex, Spacer } from '@chakra-ui/layout'
import bgimg from '../../assets/images/sitebg.jpg'
import person1 from '../../assets/images/member_1.jpg'
import { Image } from '@chakra-ui/image'
import { Divider } from "@chakra-ui/react"

import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/form-control'
import { Textarea } from "@chakra-ui/react"
import { Button } from '@chakra-ui/button'




const Post = () => {
    return (
        <>
            <Container className='create-page-container' bgImage={bgimg} backgroundAttachment='fixed' backgroundRepeat='no-repeat' bgSize='cover' maxW='full'>
                <HStack direction={["column", "row"]} justifyContent="space-around" maxW='1200px' m='auto' py='150px'>
                    <VStack w='30%' textAlign='center' borderRadius='8px'  >
                        <Box p='2' bg='#1d1d1d' color='white' marginBottom='16px' borderRadius='10px' padding='0px' w='100%' py='12'>
                            <Image src={person1} alt='Create image' w='100%' height='100%' />
                        </Box>
                        <FormControl id="name" >
                            <Input type="text" bg='#1d1d1d' _placeholder={{ color: 'white' }} borderColor='#3d3d3d' color='white' placeholder='Moonriver' />
                        </FormControl>
                        <FormControl id="username" pt='4'>
                            <Input type="text" bg='#1d1d1d' _placeholder={{ color: 'white' }} color='white' borderColor='#3d3d3d' placeholder='Artwork' />
                        </FormControl>
                        <FormControl id="username" pt='4'>
                            <Input type="text" bg='#1d1d1d' _placeholder={{ color: 'white' }} color='white' borderColor='#3d3d3d' placeholder='VAPOR VIBES' />
                        </FormControl>
                    </VStack>
                    <VStack w='30%' >
                        <Box borderRadius='6px' >
                            <Box bgColor='#022751' w='100%' height='50px' borderRadius='6px 6px 0px 0px'></Box>
                            <Box bg='#1d1d1d' borderColor='#3d3d3d' borderRadius='0px 0px 6px 6px'>
                                <HStack spacing='24px' p='20px'>
                                    <Box w='30%' mt='-46px'>
                                        <Image src={person1} borderRadius='md' />
                                    </Box>
                                    <Box w='70%' textAlign='left'>
                                        <Heading fontSize='md' color='white'>Artist Person</Heading>
                                        <Text fontSize='sm' color='#8e8e8e'>@ArtistPerson</Text>
                                    </Box>
                                </HStack>
                            </Box>
                        </Box>
                        <FormControl id="websitefield" pt='4'>
                            <Input type="text" bg='#1d1d1d' _placeholder={{ color: 'white' }} color='white' borderColor='#3d3d3d' placeholder='DESKTOP #33' />
                        </FormControl>
                        <FormControl id="websitefield" pt='4'>
                            <Textarea rows='8' bg='#1d1d1d' _placeholder={{ color: 'white' }} color='white' borderColor='#3d3d3d' placeholder="A description of the artwork for NFT sale by auction." />
                        </FormControl>
                    </VStack>
                    <VStack w='24%' bg='#1d1d1d' color='white' textAlign='center' borderRadius='6' height='full' padding='0px 0px 20px 0px'>
                        <VStack>
                            <Box bgColor='#022751' w='100%' height='40px' borderRadius='6px 6px 0px 0px'></Box>
                            <HStack spacing='24px' px='20px' pb='2'>
                                <Box w='30%' mt='-26px'>
                                    <Image src={person1} borderRadius='md' />
                                </Box>
                                <Box w='70%' textAlign='left'>
                                    <Heading fontSize='sm'>Collector Person</Heading>
                                    <Text fontSize='xs' color='#8e8e8e'>@MegaCollector</Text>
                                </Box>
                            </HStack>

                            <VStack px='1'>
                                <Divider />
                                <VStack className='bidding-list' w='full'>
                                    <Heading as='h4' size='xs' pt='4' >Bids</Heading>
                                    <VStack height='200px' overflow='auto' w='full' >
                                        <Flex py='1' w='full' px='0px'>
                                            <Box>
                                                <Text>@Collector1</Text>
                                            </Box>
                                            <Spacer />
                                            <Box>
                                                <Text fontWeight='bold'>0.99 BNB</Text>
                                                <Text fontSize='xs' color='#8e8e8e'>5 minutes ago</Text>
                                            </Box>
                                        </Flex>
                                        <Flex py='1' w='full'>
                                            <Box >
                                                <Text>@Collector2</Text>
                                            </Box>
                                            <Spacer />
                                            <Box>
                                                <Text fontWeight='bold'>0.99 BNB</Text>
                                                <Text fontSize='xs' color='#8e8e8e'>5 minutes ago</Text>
                                            </Box>
                                        </Flex>
                                        <Flex py='1' w='full'>
                                            <Box p='4' p='0'>
                                                <Text>@Collector3</Text>
                                            </Box>
                                            <Spacer />
                                            <Box p='4' p='0'>
                                                <Text fontWeight='bold'>0.99 BNB</Text>
                                                <Text fontSize='xs' color='#8e8e8e'>5 minutes ago</Text>
                                            </Box>
                                        </Flex>
                                        <Flex py='1' w='full'>
                                            <Box p='4' p='0'>
                                                <Text>@Collector3</Text>
                                            </Box>
                                            <Spacer />
                                            <Box p='4' p='0'>
                                                <Text fontWeight='bold'>0.99 BNB</Text>
                                                <Text fontSize='xs' color='#8e8e8e'>5 minutes ago</Text>
                                            </Box>
                                        </Flex>
                                        <Flex py='1' w='full'>
                                            <Box p='4' p='0'>
                                                <Text>@Collector3</Text>
                                            </Box>
                                            <Spacer />
                                            <Box p='4' p='0'>
                                                <Text fontWeight='bold'>0.99 BNB</Text>
                                                <Text fontSize='xs' color='#8e8e8e'>5 minutes ago</Text>
                                            </Box>
                                        </Flex>
                                    </VStack>
                                </VStack>
                                <Divider />
                                <Heading as='h4' size='xs' py='2' >NFT History</Heading>
                                <Divider />
                                <Box>
                                    <VStack p='4px 0px 0px 0px'>
                                        <Box pos='relative'>
                                            <Input placeholder='Basic usage' bg='black' color='white' border='1px solid trasnparent' borderRadius='' placeholder='1.00' />
                                            <Text className='coinname' right='4' top='2' pos='absolute'>BNB</Text>
                                        </Box>
                                        <Button bg='#fff' color='black' w='100%'>Place Bid</Button>
                                    </VStack>
                                </Box>
                            </VStack>
                        </VStack>
                    </VStack>
                </HStack>
            </Container>
        </>
    )
}

export default Post

import React from 'react'
import { Box, HStack, VStack, Container, Heading } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
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
            <Container className='create-page-container' bgImage={bgimg} backgroundAttachment='fixed' backgroundRepeat='no-repeat' maxW='full'>
                <HStack direction={["column", "row"]} justifyContent="space-around" maxW='1170px' m='auto' py='150px'>
                    <VStack w='30%' textAlign='center' borderRadius='8px' padding='0px' >
                        <Box p='2' bg='#1d1d1d' color='white' marginBottom='16px' borderRadius='10px' padding='0px'>
                            <Box borderRadius='8px'>
                                <Image src={person1} alt='Create image' borderRadius='8px 8px 0px 0px' />
                            </Box>
                        </Box>
                        <FormControl id="name" >
                            <Input type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='Moonriver' />
                        </FormControl>
                        <FormControl id="username" pt='4'>
                            <Input type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='Artwork' />
                        </FormControl>
                        <FormControl id="username" pt='4'>
                            <Input type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='VAPOR VIBES' />
                        </FormControl>
                    </VStack>
                    <VStack w='30%' >
                        <FormControl id="websitefield" pt='4'>
                            <Input type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='DESKTOP #33' />
                        </FormControl>
                        <FormControl id="websitefield" pt='4'>
                            <Textarea rows='8' bg='#1d1d1d' borderColor='#3d3d3d' placeholder="A description of the artwork for NFT sale by auction." />
                        </FormControl>


                    </VStack>
                    <VStack w='200px' bg='#1d1d1d' color='white' textAlign='center' borderRadius='6' height='full' p='3'>

                        <Heading as='h4' size='xs' >Bids</Heading>





                        <Divider />
                        <Heading as='h4' size='xs' >NFT History</Heading>
                        <Divider />
                        <Button bg='#fff' color='black'>Place Bid</Button>
                    </VStack>
                </HStack>
            </Container>
        </>
    )
}

export default Post

import React from 'react'
import {  Box, HStack, VStack, Container } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import bgimg from '../../assets/images/sitebg.jpg'
import person1 from '../../assets/images/member_1.jpg'
import { Image } from '@chakra-ui/image'
import { Divider } from "@chakra-ui/react"

import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/form-control'
import HeroSmall from '../../components/creator/HeroSmall'

const Creator = () => {
    return (
        <>
            <HeroSmall />
            <Container className='create-page-container' bgImage={bgimg} backgroundAttachment='fixed' backgroundRepeat='no-repeat' maxW='full'>
                <HStack direction={["column", "row"]} justifyContent="space-around" maxW='1170px' m='auto' pb='80px'>
                    <VStack w='30%' textAlign='center' borderRadius='8px' padding='0px' >
                        <Box mt='-60px' p='2' bg='#1d1d1d' color='white' marginBottom='16px' borderRadius='10px' padding='0px'>
                            <Box borderRadius='8px'>
                                <Image src={person1} alt='Create image' borderRadius='8px 8px 0px 0px' />
                            </Box>
                            <Text py='4'>264 Followers</Text>
                        </Box>
                        <FormControl id="name" >
                            <FormLabel color='white'>Name</FormLabel>
                            <Input _placeholder={{ color: 'white' }} color='white' placeholder='Human Person' type="text" bg='#1d1d1d' borderColor='#3d3d3d' />
                        </FormControl>
                        <FormControl id="username" pt='4'>
                            <FormLabel color='white'>Username</FormLabel>
                            <Input _placeholder={{ color: 'white' }} color='white' type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='@ArtistPerson' />
                        </FormControl>
                    </VStack>
                    <VStack w='30%' pt='60px' >
                        <FormControl id="websitefield" pt='4'>
                            <FormLabel color='white'>Website</FormLabel>
                            <Input _placeholder={{ color: 'white' }} color='white' type="text" bg='#1d1d1d' borderColor='#3d3d3d'  placeholder='www.thispersondoesnotexist.com'  />
                        </FormControl>
                        <FormControl id="walletfield" pt='4'>
                            <FormLabel color='white'>Wallet</FormLabel>
                            <Input _placeholder={{ color: '#8e8e8e' }} color='white' type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='Coinbase Wallet - #0000000000' />
                        </FormControl>
                        <FormControl id="twitterfield" pt='4'>
                            <FormLabel color='white'>Twitter</FormLabel>
                            <Input _placeholder={{ color: '#8e8e8e' }} color='white' type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='twitter.com/artistperson01' />
                        </FormControl>
                        <FormControl id="instafield" pt='4'>
                            <FormLabel color='white'>Instagram</FormLabel>
                            <Input _placeholder={{ color: '#8e8e8e' }} color='white' type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='instagram.com/artistpersonNFT' />
                        </FormControl>
                        <FormControl id="instafield" pt='4'>
                            <FormLabel color='white'>Telegram</FormLabel>
                            <Input _placeholder={{ color: '#8e8e8e' }} color='white' type="text" bg='#1d1d1d' borderColor='#3d3d3d' placeholder='telegram.com/artistpersonNFT' />
                        </FormControl>

                    </VStack>
                    <VStack w='200px'  bg='#1d1d1d' color='white' textAlign='center' borderRadius='6' height='full' p='3'>
                        <Text py='8'>Created</Text>
                        <Divider />
                        <Text py='8'>Collection</Text>
                    </VStack>
                </HStack>
            </Container>
        </>
    )
}

export default Creator

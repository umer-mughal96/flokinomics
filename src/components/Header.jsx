import React from 'react'
import {  HStack,  Input, Button, Avatar, Text } from "@chakra-ui/react"
import { Box, Container } from '@chakra-ui/layout'
import { UnorderedList, ListItem } from '@chakra-ui/layout'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { MenuList, MenuItem, MenuButton, Menu } from '@chakra-ui/menu'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'




const Header = () => {
    const navigate =  useNavigate()
    return (

        <Container maxW="full" bg='rgb(28,28,28)' py='4' pos='fixed' zIndex='1000'>
            <HStack px='46' m='auto' spacing="24px" maxW='1400px'>
                <Box w="15%" h="40px" d='flex' alignItems='center' >
                    <Text color='#fff' cursor='pointer' onClick={()=>navigate('/')}>Flokinomics</Text>
                </Box>
                <Box w="85%" h="40px" bg="" d='flex' alignItems='center'>
                    {/* <Input border='none' borderRadius='0' placeholder="Flokinomics" w='30%' bg='black' /> */}
                    <InputGroup w='xs' bg='black'>
                        <InputRightElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="text" placeholder="Flokinomics" size='md' border='none' />
                    </InputGroup>
                    <UnorderedList style={{ listStyleType: 'none', display: 'flex' }}>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={()=>navigate('/')}>Home</ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={()=>navigate('/marketplace')}><>Market</></ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={()=>navigate('/create')}>Create</ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={()=>navigate('/buyflokin')}>Buy Flokin</ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer'>About</ListItem>
                    </UnorderedList>
                    <Menu>
                        <MenuButton size='sm' as={Avatar} rightIcon={<ChevronDownIcon />}>
                            {/* <Avatar mx='3' src="https://bit.ly/broken-link" /> */}
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button border fontWeight='200' bg='transparent' color='#00CEFF' border='1px solid #00CEFF' borderRadius='20px' mx='4' fontSize='12px' bgColor='#163f49' p='2px 6px'>Connect Wallet</Button>
                </Box>
            </HStack>
        </Container>

    )
}

export default Header


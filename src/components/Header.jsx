import React from 'react'
import {  HStack,  Input, Button, Avatar, Text } from "@chakra-ui/react"
import { Box, Container, Link } from '@chakra-ui/layout'
import { UnorderedList, ListItem } from '@chakra-ui/layout'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { MenuList, MenuItem, MenuButton, Menu } from '@chakra-ui/menu'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'


const Header = () => {
    return (

        <Container maxW="full" bg='rgb(28,28,28)' py='4'>
            <HStack px='46' m='auto' spacing="24px" maxW='1400px'>
                <Box w="15%" h="40px" >
                    <Text color='#fff'>Flokinomics</Text>
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
                        <ListItem px='4' color='#8b8b8b'><Link>Home</Link></ListItem>
                        <ListItem px='4' color='#8b8b8b'><Link>Market</Link></ListItem>
                        <ListItem px='4' color='#8b8b8b'><Link>Create</Link></ListItem>
                        <ListItem px='4' color='#8b8b8b'><Link>Buy Flokin</Link></ListItem>
                        <ListItem px='4' color='#8b8b8b'><Link>About</Link></ListItem>
                    </UnorderedList>
                    <Menu>
                        <MenuButton as={Avatar} rightIcon={<ChevronDownIcon />}>
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
                    <Button border fontWeight='200' bg='transparent' color='#00CEFF' border='1px solid #00CEFF' borderRadius='20px' mx='4' fontSize='12px'>Connect Wallet</Button>
                </Box>
            </HStack>
        </Container>

    )
}

export default Header


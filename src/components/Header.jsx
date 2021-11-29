import React from 'react'
import { HStack, Input, Button, Avatar, Text } from "@chakra-ui/react"
import { Box, Container, VStack } from '@chakra-ui/layout'
import { UnorderedList, ListItem } from '@chakra-ui/layout'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { MenuList, MenuItem, MenuButton, Menu } from '@chakra-ui/menu'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import { useLocation } from "react-router-dom";
import { Image } from '@chakra-ui/image'
import logo from '../assets/images/logo.jpg'



const Header = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    const navigate = useNavigate()
    return (
        <VStack w='full' bg='rgb(28,28,28)' pos='fixed' zIndex='1000' className='header-wrapper'>
            <Container maxW='1400px' py='4'>
                <HStack px='46' m='auto' spacing="24px">
                    <Box w="15%" h="40px" d='flex' alignItems='center' d='flex' >
                        <Image src={logo}
                            height='100%'
                            objectFit='contain'
                        />
                        <Text color='#fff' cursor='pointer' ml='2' onClick={() => navigate('/')}>Flokinomics</Text>
                    </Box>
                    <Box w="85%" h="40px" bg="" d='flex' alignItems='center'>
                        {/* <Input border='none' borderRadius='0' placeholder="Flokinomics" w='30%' bg='black' /> */}
                        <InputGroup w='xs' bg='black' borderRadius="4px">
                            <InputRightElement
                                pointerEvents="none"
                                children={<SearchIcon color="gray.300" />}
                            />
                            <Input type="text" _placeholder={{ color: '#8b8b8b' }} color='white' placeholder="Flokinomics" size='md' border='none' />
                        </InputGroup>
                        <UnorderedList style={{ listStyleType: 'none', display: 'flex' }}>
                            <ListItem className={splitLocation[1] === "" ? "active" : ""} px='5' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/')}>Home</ListItem>
                            <ListItem className={splitLocation[1] === "marketplace" ? "active" : ""} px='5' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/marketplace')}><>Market</></ListItem>
                            <ListItem className={splitLocation[1] === "create" ? "active" : ""} px='5' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/create')}>Create</ListItem>
                            <ListItem className={splitLocation[1] === "buyflokin" ? "active" : ""} px='5' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/buyflokin')}>Buy Flokin</ListItem>
                            <ListItem px='4' className={splitLocation[1] === "about" ? "active" : ""} color='#8b8b8b' cursor='pointer' onClick={() => navigate('/about')}>About</ListItem>
                        </UnorderedList>
                        <Menu>
                            <MenuButton mx='4' size='sm' as={Avatar} rightIcon={<ChevronDownIcon />}>
                                {/* <Avatar mx='3' src="https://bit.ly/broken-link" /> */}
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Creator</MenuItem>
                                <MenuItem>Settings</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button border fontWeight='200' size="xs" py="2" bg='transparent' color='#00CEFF'
                            border='1px solid #00CEFF' borderRadius='full' mx='4' fontSize='12px'
                            bgColor='#163f49' p='2px 6px'>Connect Wallet</Button>
                    </Box>
                </HStack>
            </Container>
        </VStack>

    )
}

export default Header


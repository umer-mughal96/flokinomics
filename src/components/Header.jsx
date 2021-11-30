import React from 'react'
import { HStack, Input, Button, Avatar, Text } from "@chakra-ui/react"
import { Box, Container, Flex } from '@chakra-ui/layout'
import { UnorderedList, ListItem } from '@chakra-ui/layout'
import { InputGroup, InputRightElement } from '@chakra-ui/input'
import { MenuList, MenuItem, MenuButton, Menu } from '@chakra-ui/menu'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router'
import HeaderDrawer from './header/HeaderDrawer'
import doglogo from '../assets/images/dog-logo.png'
import { Image } from '@chakra-ui/react'



const Header = () => {
    const navigate = useNavigate()
    return (

        <Container maxW="full" bg='rgb(28,28,28)' py='4' pos='fixed' zIndex='1000'>
            <HStack m='auto' spacing="24px" >
                <Box w="95%" m="auto" h="40px" d='flex' alignItems='center' spacing="9" justifyContent="space-between">
                    <Flex onClick={() => navigate('/')} alignItems="center">
                        <Image src={doglogo} boxSize='40px' />
                        <Text color='#fff' cursor='pointer' d={{ base: 'none', md: 'none', lg: 'block' }} ml="3">Flokinomics</Text>
                    </Flex>
                    <InputGroup w={{base: '50%', md: 'xs'}} bg='black' borderRadius="4px" >
                        <InputRightElement
                            pointerEvents="none"
                            children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="text" placeholder="Flokinomics" size='md' border='none' />
                    </InputGroup>
                    <UnorderedList listStyleType="none" d={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }} >
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/')}>Home</ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/marketplace')}><>Market</></ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/create')}>Create</ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/buyflokin')}>Buy Flokin</ListItem>
                        <ListItem px='4' color='#8b8b8b' cursor='pointer' onClick={() => navigate('/about')}>About</ListItem>
                    </UnorderedList>
                    <Menu>
                        <MenuButton size='sm' as={Avatar} rightIcon={<ChevronDownIcon />} >
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
                    <Button d={{ base: 'none', md: 'none', lg: 'block' }} border fontWeight='200' size="xs" py="2" bg='transparent' color='#00CEFF'
                        border='1px solid #00CEFF' borderRadius='full' mx='4' fontSize='12px'
                        bgColor='#163f49' p='2px 6px'>Connect Wallet</Button>
                    <HeaderDrawer />
                </Box>
            </HStack>
        </Container>

    )
}

export default Header


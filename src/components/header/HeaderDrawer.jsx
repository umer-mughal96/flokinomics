import { Button } from '@chakra-ui/button'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/modal'
import React, { useRef } from 'react'
import { useDisclosure, Input } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { UnorderedList, ListItem } from '@chakra-ui/layout'
import { useNavigate } from 'react-router'

const HeaderDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const navigate = useNavigate()

    return (
        <>
            <Button ref={btnRef} gColor='#163f49' border='1px solid #00CEFF' bg='transparent' color='#00CEFF' variant='outline' d={{ base: 'block', md: 'block', lg: 'block', xl: 'none' }} onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bgColor="#1d1d1d">
                    <DrawerCloseButton color="white" />
                    <DrawerBody mt="9">
                        <UnorderedList listStyleType="none" spacing="9" p="0px" m="0px" w="full">
                            <ListItem px='4' color='white' cursor='pointer' onClick={() => { onClose(); navigate('/')}}>Home</ListItem>
                            <ListItem px='4' color='white' cursor='pointer' onClick={() => { onClose(); navigate('/marketplace')}}><>Market</></ListItem>
                            <ListItem px='4' color='white' cursor='pointer' onClick={() => { onClose(); navigate('/create')}}>Create</ListItem>
                            <ListItem px='4' color='white' cursor='pointer' onClick={() => { onClose(); navigate('/buyflokin')}}>Buy Flokin</ListItem>
                            <ListItem px='4' color='white' cursor='pointer' onClick={() => { onClose(); navigate('/about')}}>About</ListItem>
                        </UnorderedList>
                        <Button border fontWeight='200' size="xs" mt="7" bg='transparent' color='#00CEFF'
                            border='1px solid #00CEFF' borderRadius='full' mx='4' fontSize='12px'
                            bgColor='#163f49' p='2px 6px'>Connect Wallet</Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default HeaderDrawer

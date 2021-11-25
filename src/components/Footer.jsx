import React from 'react'
import { Stack, Box, Text, UnorderedList, ListItem, Container, Link, Divider, Flex, Spacer, HStack } from '@chakra-ui/layout'
import { AddIcon, SunIcon } from '@chakra-ui/icons'
const Footer = () => {
    return (
        <Container maxW="full" bg='#0f0f0f'>
            <Stack direction={["column", "row"]} spacing="24px" maxW='1400px' py='60px' color='#8b8b8b'>
                <Box w="30%" h="">
                    <Text>
                        Flokinomics Marketplace is a next generation marketplace where artists
                        and collectors can create,sell and collect digital items secured with blockchain.
                    </Text>
                </Box>
                <Box w="30%" h="">
                    <Text color='white' >Marketplace</Text>
                    <UnorderedList style={{ listStyleType: 'none', marginLeft: '0px' }}>
                        <ListItem ><Link>Explore</Link></ListItem>
                        <ListItem ><Link>Creators</Link></ListItem>
                        <ListItem ><Link>Website General Terms of Use</Link></ListItem>
                        <ListItem ><Link>Privacy Policy</Link></ListItem>
                    </UnorderedList>
                </Box>
                <Box w="30%" h="">
                    <Text color='white'>Resources</Text>
                    <UnorderedList style={{ listStyleType: 'none', marginLeft: '0px' }}>
                        <ListItem ><Link>White Paper</Link></ListItem>
                        <ListItem ><Link>Telegram Community</Link></ListItem>
                    </UnorderedList>
                </Box>
            </Stack>
            <Stack color='#8b8b8b'>
                <Box>
                    <Divider />
                </Box>
                <Flex>
                    <Box p="4" >
                        <Text>@ 2021 Flokinomics All Rights Reserved.</Text>
                    </Box>
                    <Spacer />
                    <Box p="4" g="green.400">
                        <HStack spacing="24px">
                            <Link>
                                <AddIcon />
                            </Link>
                            <Link>
                                <SunIcon />
                            </Link>
                            <Link>
                                <AddIcon />
                            </Link>
                        </HStack>
                    </Box>
                </Flex>
            </Stack>


        </Container>
    )
}

export default Footer

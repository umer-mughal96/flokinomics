import React from 'react'
import { VStack, Flex, Heading, Stack } from '@chakra-ui/layout'
import { Tab, Tabs, TabList, TabPanel, TabPanels, } from '@chakra-ui/tabs'
import CollectionsItem from './collections/CollectionsItem'
import { Button } from '@chakra-ui/button'


const FeaturedCollections = () => {
    return (
        <VStack w="full" py="16">
            <Heading color="white" fontSize={{base: 'lg', md: '2xl', lg: '3xl'}}>Featured Collections</Heading>
            <Flex w={{ base: '95%', md: '90%', lg: '95%' }}>
                <Tabs variant="soft-rounded" w="full" color="white" >
                    <TabList p="2" className="collections-slider" overflow="auto" my="2" bg='#1d1d1d' borderRadius="full" w={{ base: '100%', md: '100%', lg: '60%' }} mx="auto" alignItems="center" justifyContent="space-between">
                        <Tab _selected={{ color: "white", bg: "#FFD700" }} fontSize={{ base: '10px', md: '15px' }} fontWeight="100" color="white">Artwork</Tab>
                        <Tab _selected={{ color: "white", bg: "#FFD700" }} fontSize={{ base: '10px', md: '15px' }} fontWeight="100" color="white">Music</Tab>
                        <Tab _selected={{ color: "white", bg: "#FFD700" }} fontSize={{ base: '10px', md: '15px' }} fontWeight="100" color="white" minW="max-content">Tranding Cards</Tab>
                        <Tab _selected={{ color: "white", bg: "#FFD700" }} fontSize={{ base: '10px', md: '15px' }} fontWeight="100" color="white">Collectibles</Tab>
                        <Tab _selected={{ color: "white", bg: "#FFD700" }} fontSize={{ base: '10px', md: '15px' }} fontWeight="100" color="white">Utilities</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel >
                            <Stack spacing={{base:'12', md:'4'}}>

                            <CollectionsItem />
                            <CollectionsItem isMovers={true} />
                            <CollectionsItem isNewest={true} />
                            </Stack>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                            <CollectionsItem />
                            <CollectionsItem />

                        </TabPanel>
                        <TabPanel>
                            <p>three!</p>
                            <CollectionsItem />

                        </TabPanel>
                        <TabPanel>
                            <p>four!</p>
                            <CollectionsItem />
                            <CollectionsItem />

                        </TabPanel>
                        <TabPanel>
                            <p>five!</p>
                            <CollectionsItem />

                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
            <Button fontSize={{base: 'sm', md: 'md', lg: 'xl'}} bgColor="#816d0c82" border="2px" borderColor="#e5ca45" color="#e5ca45" borderRadius="full" 
            fontWeight="100" variant='outline'>
                View Collection in the in Marketplace
            </Button>
        </VStack>
    )
}

export default FeaturedCollections

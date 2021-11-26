import React from 'react'
import { VStack, Flex, Heading } from '@chakra-ui/layout'
import { Tab, Tabs, TabList, TabPanel, TabPanels, } from '@chakra-ui/tabs'
import CollectionsItem from './collections/CollectionsItem'


const FeaturedCollections = () => {
    return (
        <VStack w="full" pt="9">
            <Heading color="white">Featured Collections</Heading>
            <Flex w={{ base: '95%', md: '90%', lg: '90%' }}>
                <Tabs variant="soft-rounded" w="full" color="white" >
                    <TabList my="9" bg='#1d1d1d' borderRadius="full" w={{ base: '90%', md: '70%', lg: '60%' }} mx="auto" colorScheme="blue" alignItems="center" justifyContent="space-between">
                        <Tab color="white">Artwork</Tab>
                        <Tab color="white">Music</Tab>
                        <Tab color="white">Tranding Cards</Tab>
                        <Tab color="white">Collectibles</Tab>
                        <Tab color="white">Utilities</Tab>
                    </TabList>
                    <TabPanels >
                        <TabPanel >
                            <CollectionsItem />
                            <CollectionsItem isMovers={true} />
                            <CollectionsItem isNewest={true} />
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
        </VStack>
    )
}

export default FeaturedCollections

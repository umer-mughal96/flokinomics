import { HStack } from '@chakra-ui/layout'
import React from 'react'
import bgimg from '../../assets/images/sitebg.jpg'
import MarketPlaceData from '../../components/marketPlace/MarketPlaceData'
import FilterSideBar from '../../components/sideBar/FilterSideBar'


const Collections = () => {
    return (
        <HStack
            backgroundImage={bgimg}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundAttachment="fixed"
            pt="72px"
            h="full"
            w="full"
            alignItems="flex-start"
        >
            <FilterSideBar isCollections={true} />
            <MarketPlaceData isCollections={true} />
        </HStack>
    )
}

export default Collections

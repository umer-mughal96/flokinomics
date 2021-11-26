import { HStack } from '@chakra-ui/layout'
import React from 'react'
import bgimg from '../../assets/images/sitebg.jpg'
import FilterSideBar from '../../components/marketPlace/FilterSideBar'
import MarketPlaceData from '../../components/marketPlace/MarketPlaceData'

const MarketPlace = () => {
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
            <FilterSideBar />
            <MarketPlaceData />
        </HStack>
    )
}

export default MarketPlace

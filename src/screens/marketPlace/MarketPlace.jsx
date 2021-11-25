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
            py="20"
            h="full"
            w="full"
        >
            <FilterSideBar />
            <MarketPlaceData />
        </HStack>
    )
}

export default MarketPlace

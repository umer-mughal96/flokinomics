import { VStack } from '@chakra-ui/layout'
import React from 'react'
import Categories from './sideBarFilterComp/Categories'
import FilterComp from './sideBarFilterComp/FilterComp'
import Payment from './sideBarFilterComp/Payment'
import Status from './sideBarFilterComp/Status'

const FilterSideBar = () => {
    return (
        <VStack w="25%" bgColor="#1d1d1d" h="100vh" px="5">
            <FilterComp />
            <Status />
            <Categories />
            <Payment />
        </VStack>
    )
}

export default FilterSideBar

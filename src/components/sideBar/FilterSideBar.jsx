import { VStack } from '@chakra-ui/layout';
import React from 'react';
import FilterComp from '../sideBarFilterComp/FilterComp';
import Payment from '../sideBarFilterComp/Payment';
import Status from '../sideBarFilterComp/Status';
import Categories from '../sideBarFilterComp/Categories';
import CollectionsName from '../productsCollections/CollectionsName';
import CollectionsColors from '../productsCollections/CollectionsColors';
import { useLocation } from "react-router-dom";
import CollectionDetailComp from '../collection/CollectionDetailComp';

const FilterSideBar = ({ isCollections }) => {
    const location = useLocation();
    return (
        <VStack w="25%" bgColor="#1d1d1d" h={isCollections ? '130vh' : '100vh'} px="5" position="sticky" top="0">
            {
                location.pathname === `/productcollection` ?
                    <>
                        <CollectionsName />
                        <Status />
                        <Categories />
                        <CollectionsColors />
                    </>
                    : location.pathname === '/collection' ?
                        <>
                            <CollectionsName />
                            <Status />
                            <Categories />
                        </>
                        : location.pathname === '/collectiondetail' ?
                            <>
                                <CollectionsName iscollectiondetail={true} />
                                <CollectionDetailComp />
                                <Status />
                                <Categories />
                            </>
                            :
                            <>
                                <FilterComp />
                                <Status />
                                <Categories />
                                <Payment />
                            </>
            }
        </VStack>
    )
}

export default FilterSideBar

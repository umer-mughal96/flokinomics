import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/modal'
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


const MobileSideBar = ({ isOpen, setIsOpen, isCollections, isMobileSideBar }) => {
    const location = useLocation();
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
            // onClose={onClose}
            // finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color="white" onClick={() => setIsOpen()} />
                    <DrawerBody bgColor="#1d1d1d" pt="7">
                        <VStack w="100%"  h={isCollections ? '130vh' : '100vh'} px="5" position="sticky" top="0">
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
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileSideBar

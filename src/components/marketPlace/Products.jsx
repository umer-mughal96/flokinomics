import { LockIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Flex, Text, VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import pic1 from '../../assets/images/arrayimg.jpg'
import pic2 from '../../assets/images/sitebg.jpg'
import pic3 from '../../assets/images/member_2.jpg'
import pic4 from '../../assets/images/member_3.jpg'
import pic5 from '../../assets/images/member_1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Products = () => {
    const productArray = [
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1.2k'
        },
        {
            productImg: pic2,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Jhone ',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '2.2k'
        },
        {
            productImg: pic3,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1k'
        },
        {
            productImg: pic4,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic5,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },

        {
            productImg: pic1,
            productName: 'Album Name',
            productCity: 'Cityscape',
            productPrice: '$20',
            productOwner: '@Artist',
            paymentBank: '0.10 BNB',
            productBuy: 'Buy Now',
            productLike: '1'
        },
    ]
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            {productArray.map((productObj, index) =>
                <VStack color="white" w={{base: '100%', md: '32%' }} my="2" alignItems="flex-start" bgColor="black" borderRadius="xl" alignItems="flex-start" key={index}>
                    <Image borderTopLeftRadius="xl" borderTopRightRadius="xl" w="full" h="40vh" src={productObj.productImg} alt="Dan Abramov" />
                    <Text px="2" fontSize="sm">{productObj.productName}</Text>
                    <Flex justifyContent="space-between" px="2" w="full">
                        <Text fontSize="sm">{productObj.productCity}</Text>
                        <Text fontSize="sm">{productObj.productPrice}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" px="2" w="full">
                        <Text fontSize="sm">{productObj.productOwner}</Text>
                        <Text fontSize="sm">{productObj.paymentBank}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" px="2" w="full" bgColor="#1d1d1d" py="2" borderBottomLeftRadius="xl" borderBottomRightRadius="xl">
                        <Text fontSize="sm">{productObj.productBuy}</Text>
                        {show ?
                            <FontAwesomeIcon icon={faHeart} onClick={handleClick} />
                            :
                            <FontAwesomeIcon icon={farHeart} onClick={() => setShow(true)} />
                        }
                    </Flex>
                </VStack>
            )}
        </>
    )
}

export default Products

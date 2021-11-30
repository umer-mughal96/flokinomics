import React from 'react'
import { Text, Link, Heading, VStack } from '@chakra-ui/layout'
import { InfoIcon } from '@chakra-ui/icons'

const GetStartedCard = ({ isAddWallet, isCreateCollection, isAddCollection, isSellItem }) => {
    return (
        <VStack w={{base: '100%', md: '47%', xl: '300px'}} h="48" bg="#1d1d1d" borderRadius='14'  px='3' color='white' py="4"
            mt={{base: '10px', md: '10px', lg: `${isCreateCollection ? '9' : isAddCollection ? '20' : isSellItem ? '28' : '0.5'}`}} mx="1"
            >
            <Heading d='flex' alignItems='center' as='h3' size='sm' justifyContent='center'
                pb='4' fontWeight="100"><InfoIcon marginRight='4' />
                {isAddWallet ? "Add Wallet" : isCreateCollection ? "Create a Collection" : isAddCollection ? "Add To Your Collection" : "Sell Item"}
            </Heading>
            <Text fontSize="xs">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Text>
            {isAddWallet ?
                <Link textDecor='underline' color='#9e7609'>Connect Instructions</Link>
                : null}
        </VStack>
    )
}

export default GetStartedCard

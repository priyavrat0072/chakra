import React from 'react'
import { Box, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headngOptions ={
    pos:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size:'4xl'
}

const Home = () => {
  return (
    <Box  >
        
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'} >
            Services
        </Heading>

        <Stack h={'full'}
                p={'4'}
                alignItems={'center'}
                direction={['column','row']}
        >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'} />
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla eius ab enim dolore modi veritatis voluptas dolor id, vel officia quaerat et odit consequatur a blanditiis fugit facere quam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla eius ab enim dolore modi veritatis voluptas dolor id, vel officia quaerat et odit consequatur a blanditiis fugit facere quam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla eius ab enim dolore modi veritatis voluptas dolor id, vel officia quaerat et odit consequatur a blanditiis fugit facere quam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla eius ab enim dolore modi veritatis voluptas dolor id, vel officia quaerat et odit consequatur a blanditiis fugit facere quam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nulla eius ab enim dolore modi veritatis voluptas dolor id, vel officia quaerat et odit consequatur a blanditiis fugit facere quam.

                </Text>
        </Stack>
    </Container>
</Box>
  )
  
    
  
};

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
            <Box w={"full"} h={'100vh'} >
                <Img src={img1} />
                <Heading bgColor={"blackAlpha.600"} color={'white'} {...headngOptions} >
                        Watch The Future
                </Heading>
            </Box>
            <Box w={"full"} h={'100vh'} >
                <Img src={img2} />
                <Heading bgColor={"whiteAlpha.900"} color={'black'}  {...headngOptions}>
                        Future is gaming
                </Heading>
            </Box>
            <Box w={"full"} h={'100vh'} >
                <Img src={img3} />
                <Heading bgColor={"whiteAlpha.600"} color={'black'}  {...headngOptions}>
                        Gaming On Console
                </Heading>
            </Box>
            <Box w={"full"} h={'100vh'} >
                <Img src={img4} />
                <Heading bgColor={"whiteAlpha.600"} color={'black'}  {...headngOptions}>
                        Night life is cool
                </Heading>
            </Box>
    </Carousel>
);

export default Home;
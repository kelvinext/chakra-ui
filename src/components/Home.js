import { Box, Image, Heading, Container, Stack,Text,Link } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.png"
const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl"
}
function Home() {
  return (
    <Box>
      <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w='full' h={"100vh"}>
          <Image src={img1} />
          <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Watch The Future</Heading>
        </Box>
        <Box w='full' h={"100vh"}>
          <Image src={img2} />
          <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Future is gaming</Heading>
        </Box>
        <Box w='full' h={"100vh"}>
          <Image src={img3} />
          <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Gaming on console</Heading>
        </Box>
        <Box w='full' h={"100vh"}>
          <Image src={img4} />
          <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Night life is cool</Heading>
        </Box>
      </Carousel>
      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading textTransform={"uppercase"} py={'2'} w={"fit-content"} borderBottom={"2px solid black"} margin={"auto"}>Services</Heading>
        <Stack h={"full"} p={4} alignItems={"center"} direction={["column", "row"]} >
          <Image src={img5} filter={"hue-rotate(-7deg)"} h={[40,400]} className='anim'/>
          <Text letterSpacing={"widest"} p={[4,16]} lineHeight={"190%"}>
          Gaming services are platforms that provide access to games, either through streaming or by downloading. They can be accessed on a variety of devices, including computers, smartphones, tablets, and consoles. Gaming services offer a variety of features, such as cloud saves, multiplayer matchmaking, and exclusive content.

Here are some of the most popular gaming services:

Steam
Steam gaming service logoOpens in a new window
1000logos.net
Steam gaming service logo
Epic Games Store
Epic Games Store gaming service logoOpens in a new window 
<Link color={"blue"} to="www.pcmag.com"> www.pcmag.com </Link> 
Epic Games Store gaming service logo
Xbox Game Pass
Xbox Game Pass gaming service logoOpens in a new window
<Link color={"blue"} to="www.downloadsource.net"> www.downloadsource.net </Link> 
Xbox Game Pass gaming service logo
Google Stadia
Google Stadia gaming service logoOpens in a new window
www.businessinsider.com<Link color={"blue"} to="www.businessinsider.com"> www.businessinsider.com </Link> 
Google Stadia gaming service logo
PlayStation Now
PlayStation Now gaming service logoOpens in a new window
www.gamespot.com<Link color={"blue"} to="www.gamespot.com"> www.gamespot.com </Link> 
PlayStation Now gaming service logo
When choosing a gaming service, it is important to consider your needs and preferences. Some factors to consider include the types of games you want to play, the devices you want to use, and your budget.
          </Text>
        </Stack>
      </Container>
    </Box>

  )
}


export default Home

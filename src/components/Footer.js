import React from 'react'
import { Box, Stack, VStack, Heading, HStack, Button, Input,Text} from '@chakra-ui/react'
import {AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineSend} from "react-icons/ai"
function Footer() {
  return (
   <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
    <Stack direction={["column","row"]}>
    <VStack alignItems={"stretch"} w={"full"} p={"4"} justifyContent={"center"}>
      <Heading size="md" textTransform={"uppercase"} textAlign={["center","start"]}>Subscribe to get updates</Heading>
    <HStack borderBottom={"2px solid white"} py={"2"}>
      <Input placeholder='Enter Email Here....' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor={"none"}/>
      <Button p={0} color={"purple"} variant={"ghost"} borderRadius={"0 20px 20px 0"}>
        <AiOutlineSend size={"20"}/>
      </Button>
    </HStack>
    </VStack>
    <VStack w={"full"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]} justifyContent={"center"} >
<Heading textTransform={"uppercase"} textAlign={"center"}>Video hub</Heading>
<Text>All right received</Text>
    </VStack>
    <VStack w={"full"} justifyContent={"center"}>
<Heading size={"md"}textTransform={"uppercase"}>social media</Heading>
<HStack>
<Button variant={"link"} colorScheme='white'>
<a href='/'>
  <AiFillYoutube size={40}/>
</a>
</Button>
<Button variant={"link"} colorScheme='white'>
<a href='/'>
  <AiFillInstagram size={40}/>
</a>
</Button>
<Button variant={"link"} colorScheme='white'>
<a href='/'>
  <AiFillGithub size={40}/>
</a>
</Button>
</HStack>
</VStack>
    </Stack>
   </Box>
  )
}

export default Footer

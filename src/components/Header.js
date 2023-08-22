import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { VStack,HStack } from '@chakra-ui/react'
import {BiMenuAltLeft} from 'react-icons/bi'
export default function Header() {
  const {isOpen,onOpen,onClose}= useDisclosure()
  return (
   <>
   <Button pos={'fixed'} top={4} left={4} colorScheme='purple' p={0} w={10} h={10} borderRadius={10} onClick={onOpen} zIndex={'overlay'}>
    <BiMenuAltLeft/>
   </Button>
  <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay/>
<DrawerContent>
<DrawerCloseButton/>
<DrawerHeader>VIDEO HUB</DrawerHeader>
<DrawerBody>
 <VStack>
  <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
    <Link to={"/"}>Home</Link>
  </Button>
  <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
    <Link to={"/videos"}>Videos</Link>
  </Button>
  <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
    <Link to={"/free"}>Free Vedio</Link>
  </Button>
  <Button variant={"ghost"} colorScheme={'purple'} onClick={onClose}>
    <Link to={"/upload"}>Upload Vedio</Link>
  </Button>
 </VStack>
 <HStack pos={'absolute'} bottom={'10'} left={'0'} width={'full'} justifyContent={'space-evenly'}>
 <Button variant={'solid'} colorScheme={'purple'} onClick={onClose}>
    <Link to={"/login"}>Log In</Link>
  </Button>
  <Button variant={"outline"} colorScheme={'purple'} onClick={onClose}>
    <Link to={"/signup"}>Sign Up</Link>
  </Button>
 </HStack>
</DrawerBody>
</DrawerContent>
  </Drawer>
   </>
  )
}


import { Button, Container, Heading, Input, VStack, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <from>
            <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m={"auto"}my={"16"}>
                <Heading>
                    Welcome Back
                </Heading>
<Input placeholder='Email' type='email' required focusBorderColor='purple.500'></Input>
<Input placeholder='Password' type='password' required focusBorderColor='purple.500'></Input>
<Button variant={'link'} alignSelf={'flex-end'}>
    <Link to={"/forgetpasswords"}>Forget Password</Link>
</Button>
<Button colorScheme='purple' type={'submit'}>
    Login
</Button>
<Text textAlign={"right"}>New User?{"   "}
<Button variant={'link'} colorScheme='purple'>
    <Link to={"/signup"}>SignUp</Link>
</Button>
</Text>

            </VStack>
        </from>

    </Container>
  )
}

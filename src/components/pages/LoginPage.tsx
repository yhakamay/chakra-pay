import {
  Button, Divider, Flex, Heading, Input,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import ChakraPayCard from '../atoms/ChakraPayCard';

const LoginPage: FC = memo(() => (
  <Flex align="center" justify="center" height="100vh">
    <ChakraPayCard>
      <Heading as="h1" size="lg" textAlign="center">Chakra Pay</Heading>
      <Divider my={4} />
      <Input placeholder="Email" />
      <Button w="100%" colorScheme="teal" variant="solid" my={4}>Login</Button>
    </ChakraPayCard>
  </Flex>
));

export default LoginPage;

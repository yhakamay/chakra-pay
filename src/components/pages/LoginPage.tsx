import {
  Button, Divider, Flex, Heading, Input,
} from '@chakra-ui/react';
import { FC, memo, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ChakraPayCard from '../atoms/ChakraPayCard';

const LoginPage: FC = memo(() => {
  const [email, setEmail] = useState('');
  const { login, isLoading } = useAuth();
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onClickLogin = () => login(email);

  return (
    <Flex align="center" justify="center" height="100vh">
      <ChakraPayCard>
        <Heading as="h1" size="lg" textAlign="center">Chakra Pay</Heading>
        <Divider my={4} />
        <Input placeholder="Email" type="email" value={email} onChange={onChangeEmail} />
        <Button onClick={onClickLogin} w="100%" colorScheme="teal" variant="solid" my={4} isLoading={isLoading} disabled={isLoading}>Login</Button>
      </ChakraPayCard>
    </Flex>
  );
});

export default LoginPage;

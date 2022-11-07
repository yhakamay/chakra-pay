import { useDisclosure, Flex, Button } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import ChakraPayIconButton from '../atoms/ChakraPayIconButton';
import ChakraPayLogo from '../atoms/ChakraPayLogo';
import ChakraPayDrawer from '../molecules/ChakraPayDrawer';

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = () => navigate('/');
  const onClickUsers = () => navigate('/users');
  const onClickSettings = () => navigate('/settings');

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <ChakraPayLogo onClick={onClickHome}>Chakra Pay</ChakraPayLogo>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: 'none', md: 'flex' }}
        >
          <Button variant="ghost" onClick={onClickUsers}>Users</Button>
          <Button variant="ghost" onClick={onClickSettings}>Settings</Button>
        </Flex>
        <ChakraPayIconButton onClick={onOpen} />
      </Flex>
      <ChakraPayDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickUsers={onClickUsers}
        onClickSettings={onClickSettings}
      />
    </>
  );
});

export default Header;

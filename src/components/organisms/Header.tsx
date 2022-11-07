import { useDisclosure, Flex, Button } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIconButton from '../atoms/MenuIconButton';
import Logo from '../atoms/Logo';
import MenuDrawer from '../molecules/MenuDrawer';

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const onClickHome = () => navigate('/');
  const onClickUsers = () => navigate('/users');
  const onClickSettings = () => navigate('/settings');

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Logo onClick={onClickHome}>yhakamay-dev</Logo>
        <Flex
          align="center"
          fontSize="sm"
          display={{ base: 'none', md: 'flex' }}
        >
          <Button variant="ghost" onClick={onClickUsers}>Users</Button>
          <Button variant="ghost" onClick={onClickSettings}>Settings</Button>
        </Flex>
        <MenuIconButton onClick={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickUsers={onClickUsers}
        onClickSettings={onClickSettings}
      />
    </>
  );
});

export default Header;

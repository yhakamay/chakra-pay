import { useDisclosure, Flex, Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import MenuIconButton from '../atoms/MenuIconButton';
import Logo from '../atoms/Logo';
import HeaderDrawer from '../molecules/HeaderDrawer';

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Logo>yhakamay-dev</Logo>
        <Flex
          align="center"
          fontSize="sm"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <Box pr={4}>
            <Link to="/users">Users</Link>
          </Box>
          <Box pr={0}>
            <Link to="/settings">Settings</Link>
          </Box>
        </Flex>
        <MenuIconButton onClick={onOpen} />
      </Flex>
      <HeaderDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
});

export default Header;

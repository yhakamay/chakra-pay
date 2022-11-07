import { HamburgerIcon } from '@chakra-ui/icons';
import * as ChakraUI from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = ChakraUI.useDisclosure();

  return (
    <>
      <ChakraUI.Flex as="nav" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <ChakraUI.Flex align="center" as="a" mr="8" _hover={{ cursor: 'pointer' }}>
          <ChakraUI.Heading
            as="h1"
            fontSize={{
              base: 'md',
              md: 'lg',
            }}
          >
            Header
          </ChakraUI.Heading>
        </ChakraUI.Flex>
        <ChakraUI.Flex
          align="center"
          fontSize="sm"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <ChakraUI.Box pr={4}>
            <Link to="/users">Users</Link>
          </ChakraUI.Box>
          <ChakraUI.Box pr={0}>
            <Link to="/settings">Settings</Link>
          </ChakraUI.Box>
        </ChakraUI.Flex>
        <ChakraUI.IconButton
          onClick={onOpen}
          aria-label="hamburger icon"
          icon={<HamburgerIcon />}
          size="sm"
          variant="outline"
          display={{ base: 'block', md: 'none' }}
        />
      </ChakraUI.Flex>
      <ChakraUI.Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <ChakraUI.DrawerOverlay>
          <ChakraUI.DrawerContent>
            <ChakraUI.DrawerBody p={0}>
              <ChakraUI.Button w="100%">Users</ChakraUI.Button>
              <ChakraUI.Button w="100%">Settings</ChakraUI.Button>
            </ChakraUI.DrawerBody>
          </ChakraUI.DrawerContent>
        </ChakraUI.DrawerOverlay>
      </ChakraUI.Drawer>
    </>
  );
});

export default Header;

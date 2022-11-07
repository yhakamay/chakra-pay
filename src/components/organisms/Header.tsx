import { HamburgerIcon } from '@chakra-ui/icons';
import {
  useDisclosure,
  Flex,
  Heading,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr="8" _hover={{ cursor: 'pointer' }}>
          <Heading
            as="h1"
            fontSize={{
              base: 'md',
              md: 'lg',
            }}
          >
            Header
          </Heading>
        </Flex>
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
        <IconButton
          onClick={onOpen}
          aria-label="hamburger icon"
          icon={<HamburgerIcon />}
          size="sm"
          variant="outline"
          display={{ base: 'block', md: 'none' }}
        />
      </Flex>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0}>
              <Button w="100%">Users</Button>
              <Button w="100%">Settings</Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});

export default Header;

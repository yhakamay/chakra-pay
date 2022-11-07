import {
  Button,
  Drawer, DrawerBody, DrawerContent, DrawerOverlay,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickUsers: () => void;
  onClickSettings: () => void;
};

const ChakraPayDrawer: FC<Props> = memo((props) => {
  const {
    isOpen, onClose, onClickUsers, onClickSettings,
  } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button variant="ghost" onClick={onClickUsers} w="100%">Users</Button>
            <Button variant="ghost" onClick={onClickSettings} w="100%">Settings</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default ChakraPayDrawer;

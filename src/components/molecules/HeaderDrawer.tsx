import {
  Button,
  Drawer, DrawerBody, DrawerContent, DrawerOverlay,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const HeaderDrawer: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;

  return (
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
  );
});

export default HeaderDrawer;

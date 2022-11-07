import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  onClick: () => void;
};

const MenuIconButton: FC<Props> = memo((props) => {
  const { onClick } = props;

  return (
    <IconButton
      onClick={onClick}
      aria-label="hamburger icon"
      icon={<HamburgerIcon />}
      size="sm"
      variant="outline"
      display={{ base: 'block', md: 'none' }}
    />
  );
});

export default MenuIconButton;

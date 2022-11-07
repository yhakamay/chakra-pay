import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const PrimaryButton: FC<Props> = memo((props) => {
  const { onClick, children } = props;

  return <Button onClick={onClick}>{children}</Button>;
});

export default PrimaryButton;

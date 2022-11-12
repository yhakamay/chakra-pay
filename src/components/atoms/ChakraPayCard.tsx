import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type ChakraPayCardProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const ChakraPayCard: FC<ChakraPayCardProps> = memo((props) => {
  const { onClick, children } = props;

  return (
    <Box
      onClick={onClick}
      bg="white"
      maxW="xs"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      shadow="sm"
      overflow="hidden"
      transition="all 0.1s ease-in-out"
      _hover={onclick === null ? undefined : { cursor: 'pointer', opacity: '0.7' }}
    >
      {children}
    </Box>
  );
});

export default ChakraPayCard;

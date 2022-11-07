import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type ChakraPayCardProps = {
  children: React.ReactNode;
};

const ChakraPayCard: FC<ChakraPayCardProps> = memo((props) => {
  const { children } = props;

  return (
    <Box bg="white" maxW="sm" p={4} borderWidth="1px" borderRadius="lg" shadow="sm" overflow="hidden">
      {children}
    </Box>
  );
});

export default ChakraPayCard;

import { Flex, Heading } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Logo: FC<Props> = memo((props) => {
  const { onClick, children } = props;

  return (
    <Flex align="center" as="a" mr="8" _hover={{ cursor: 'pointer' }} onClick={onClick}>
      <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
        {children}
      </Heading>
    </Flex>
  );
});

export default Logo;

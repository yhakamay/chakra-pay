import { Flex, Heading } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const Logo: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Flex align="center" as="a" mr="8" _hover={{ cursor: 'pointer' }}>
      <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
        <Link to="/">{children}</Link>
      </Heading>
    </Flex>
  );
});

export default Logo;

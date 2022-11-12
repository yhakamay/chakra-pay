import { Stack, Image, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import PartyType from '../../types/party';
import ChakraPayCard from '../atoms/ChakraPayCard';

type PartyCardProps = {
  party: PartyType;
  onClick: () => void;
};

const PartyCard: FC<PartyCardProps> = memo((props) => {
  const { party, onClick } = props;
  const {
    title, description, image, date,
  } = party;

  return (
    <ChakraPayCard onClick={onClick}>
      <Stack textAlign="center" alignItems="center">
        <Image
          src={image}
          placeholder="https://via.placeholder.com/160?text=Chakra+Pay"
          boxSize="160px"
          borderRadius="lg"
          m="auto"
        />
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{date.toLocaleDateString('en-US')}</Text>
      </Stack>
    </ChakraPayCard>
  );
});

export default PartyCard;

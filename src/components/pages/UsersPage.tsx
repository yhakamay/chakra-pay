import { FC, memo } from 'react';
import {
  Center,
  Wrap, WrapItem,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import PartyCard from '../molecules/PartyCard';
import HeaderTemplate from '../templates/HeaderTemplate';

const partySample = {
  id: uuidv4(),
  title: 'AAA',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id eros arcu. Aenean a erat sem. Donec consectetur purus nec ante feugiat, ut mattis urna vestibulum.',
  date: new Date(Date.now()),
  place: 'Tokyo, Japan',
  image: 'https://source.unsplash.com/random/',
  owner: {
    id: uuidv4(),
    name: 'Yusuke Hakamaya',
    username: 'yhakamay',
    email: 'yhakamaya1031@gmail.com',
  },
};

const UsersPage: FC = memo(() => (
  <HeaderTemplate>
    <Center>
      <Wrap p="4">
        <WrapItem>
          <PartyCard
            party={partySample}
            onClick={() => {}}
          />
        </WrapItem>
        <WrapItem>
          <PartyCard
            party={partySample}
            onClick={() => {}}
          />
        </WrapItem>
        <WrapItem>
          <PartyCard
            party={partySample}
            onClick={() => {}}
          />
        </WrapItem>
        <WrapItem>
          <PartyCard
            party={partySample}
            onClick={() => {}}
          />
        </WrapItem>
        <WrapItem>
          <PartyCard
            party={partySample}
            onClick={() => {}}
          />
        </WrapItem>
        <WrapItem>
          <PartyCard
            party={partySample}
            onClick={() => {}}
          />
        </WrapItem>
      </Wrap>
    </Center>
  </HeaderTemplate>
));

export default UsersPage;

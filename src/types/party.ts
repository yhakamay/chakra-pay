import UserType from './user';

type PartyType = {
  id: string;
  title: string;
  description: string;
  date: Date;
  place: string;
  image: string;
  owner: UserType;
};

export default PartyType;

import { FC, memo } from 'react';
import Header from '../organisms/Header';

type Props = {
  children: React.ReactNode;
};

const HeaderTemplate: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});

export default HeaderTemplate;

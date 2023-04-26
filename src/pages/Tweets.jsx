import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import UsersList from 'components/UsersList/UsersList';
import { Section, LinkBack } from 'components/App/App.styled';

export const Tweets = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/Home');

  return (
    <>
      <LinkBack to={backLinkLocationRef.current}> 🔙 Back to Homepage</LinkBack>
      <Section>
        <UsersList />
      </Section>
    </>
  );
};

export default Tweets;

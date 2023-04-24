// import MoviesCard from 'components/MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';

import { fetchUsers } from 'services/api';
import { Container } from './UsersList.styled';
import { UserCard } from 'components/UserCard/UserCard';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const searchUsersList = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    searchUsersList();
  }, []);

  return (
    <Container>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <UserCard
          key={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
        />
      ))}
    </Container>
  );
};

export default UsersList;

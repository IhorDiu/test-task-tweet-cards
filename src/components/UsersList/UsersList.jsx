// import MoviesCard from 'components/MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import { toastInfoMessage } from 'services/toast';

import { fetchUsers } from 'services/api';
import { Container, AppBox } from './UsersList.styled';
import { UserCard } from 'components/UserCard/UserCard';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (page === 0) return setPage(page + 1);
    const getUserList = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers(page);

        if (data.length === 0) {
          toastInfoMessage('All users have been loaded!');
          return setIsVisible(false);
        }

        setUserList(prevUserList => [...prevUserList, ...data]);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserList();
  }, [page]);

  const loadMoreBtn = () => {
    setPage(page + 1);
  };
  return (
    <AppBox>
      <Container>
        {userList.map(({ id, user, tweets, followers, avatar }) => (
          <UserCard
            key={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        ))}
      </Container>

      {isVisible && (loading ? <Loader /> : <Button loadMore={loadMoreBtn} />)}
      <ToastContainer />
    </AppBox>
  );
};

export default UsersList;

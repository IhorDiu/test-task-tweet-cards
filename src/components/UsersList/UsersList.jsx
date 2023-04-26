import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { toastInfoMessage } from 'services/toast';
import {
  fetchUsers,
  // updateFollowers
} from 'services/api';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { UserCard } from 'components/UserCard/UserCard';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Dropdown } from 'components/DropDown/Dropdown';

import { Container, AppBox, Wrapper } from './UsersList.styled';

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [followersList, setFollowersList] = useLocalStorage('Followers', []);
  const [statusFilter, setStatusFilter] = useState('all');

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

  useEffect(() => {
    if (page > 1) {
      window.scrollBy(0, window.innerHeight);
    }
  }, [userList, page]);

  const isFollower = userCard => {
    const isFollowing = followersList.some(({ id }) => id === userCard.id);
    if (!isFollowing) {
      setFollowersList(prevState => [...prevState, userCard]);
    } else {
      setFollowersList(followersList.filter(({ id }) => id !== userCard.id));
    }
    // const index = users.findIndex(({ id }) => user.id === id);
    // users[index].followers +-= 1;
    // const addFollowers = async ({ id, followers }) {
    //   try {
    //     await updateFollowers(id, followers);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // }

    //   addFollowers(userCard);
  };

  //

  const loadMoreBtn = () => {
    setPage(state => state + 1);
  };

  const handleFilter = filter => {
    setStatusFilter(filter);
  };

  console.log('statusFilter', statusFilter);

  const getVisibleTasks = () => {
    const followingsId = followersList.map(({ id }) => id);

    switch (statusFilter) {
      case 'follow':
        return userList.filter(({ id }) => !followingsId.includes(id));

      case 'following':
        return userList.filter(({ id }) => followingsId.includes(id));

      default:
        return userList;
    }
  };

  return (
    <AppBox>
      <Wrapper>
        <Dropdown filter={statusFilter} onFilterChange={handleFilter} />
      </Wrapper>
      <Container>
        {getVisibleTasks().map(userCard => (
          <UserCard
            key={userCard.id}
            userCard={userCard}
            isFollower={isFollower}
            followersList={followersList}
          />
        ))}
      </Container>

      {isVisible && (loading ? <Loader /> : <Button loadMore={loadMoreBtn} />)}
      <ToastContainer />
    </AppBox>
  );
};

export default UsersList;

import { useToggleFollowers } from 'hooks/useToggleFollowers';
import logo from 'img/Logo.png';
import bg_img from 'img/bg_img.png';

import {
  Card,
  Logo,
  BgImg,
  Rectangle,
  Ellipse,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './UserCard.styled';

export const UserCard = ({ userCard, isFollower, followersList }) => {
  const { user, avatar, tweets, followers } = userCard;

  const isFollowing = followersList.some(({ id }) => id === userCard.id);
  const { btnLabel, getBgColor, toggle, counterFollowers } =
    useToggleFollowers(isFollowing);

  const handleFollower = () => {
    isFollower(userCard);
    toggle();
  };

  return (
    <Card>
      <Logo src={logo} alt="Logo" />
      <BgImg src={bg_img} alt="Background" />
      <Rectangle />
      <Ellipse>
        <Avatar src={avatar} alt={user} />
      </Ellipse>
      <Tweets>{tweets.toLocaleString('en-US')} tweets</Tweets>
      <Followers>{counterFollowers(followers)} followers</Followers>
      <Button
        type="button"
        onClick={handleFollower}
        style={{ backgroundColor: getBgColor() }}
      >
        {btnLabel()}
      </Button>
    </Card>
  );
};

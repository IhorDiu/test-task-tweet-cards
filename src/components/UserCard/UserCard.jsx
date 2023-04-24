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


export const UserCard = ({ user, tweets, followers, avatar }) => {
    const { btnLabel, getBgColor, toggle, counterFollowers } =
      useToggleFollowers();
    
  console.log('first', avatar)

  
    return (
   
  
      <Card>
        <Logo src={logo} alt="Logo" />
        <BgImg src={bg_img} alt="Background" />
        <Rectangle />
        <Ellipse>
          <Avatar src={avatar} alt={user} />
        </Ellipse>
        <Tweets>{tweets} tweets</Tweets>
        <Followers>{counterFollowers(followers)} Followers</Followers>
        <Button
          type="button"
          onClick={toggle}
          style={{ background: getBgColor() }}
        >
          {btnLabel()}
        </Button>
      </Card>
    );
  };
  
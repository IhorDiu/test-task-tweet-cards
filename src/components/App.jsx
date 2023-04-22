import logo from 'img/Logo.png';
import bg_img from 'img/bg_img.png';
import avatar from 'img/Hansel.png';

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
} from './App.styled';

export const App = () => {
  return (
    <Card>
      <Logo src={logo} alt="Logo" />
      <BgImg src={bg_img} alt="Background" />
      <Rectangle />
      <Ellipse>
        <Avatar src={avatar} alt="Avatar" />
      </Ellipse>
      <Tweets>777 tweets</Tweets>
      <Followers>100,500 Followers</Followers>
      <Button>Follow</Button>
    </Card>
  );
};

import { useToggleFollowers } from 'hooks/useToggleFollowers';
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
  const { btnLabel, getBgColor, toggle, counterFollowers } =
    useToggleFollowers();
  const number = 100500;

  return (
    <Card>
      <Logo src={logo} alt="Logo" />
      <BgImg src={bg_img} alt="Background" />
      <Rectangle />
      <Ellipse>
        <Avatar src={avatar} alt="Avatar" />
      </Ellipse>
      <Tweets>777 tweets</Tweets>
      <Followers>{counterFollowers(number)} Followers</Followers>
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

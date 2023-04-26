import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Section = styled.section`
display: flex;
align-items: center;
justify-content: center;
padding: 50px;
`
export const LinkBack = styled(NavLink)`
display: flex;
justify-content: center;
text-decoration: none;
padding: 10px 20px;
color: black;
font-weight: 500;
width: 200px;
background-color: #E6E6FA;
border-radius: 25px;

:hover {
    color: white;
    background-color: #5CD3A8;}
`;




export const Wrapper = styled.div`
  position: relative;
  border-radius: 6px;

  &:hover,
  &:hover > :first-child {
    transform: scale(1.05);
    color: var(--color-text-active);
    background-color: var(--color-bg-dark-main);
  }
`;

export const Select = styled.select`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  outline: none;
  padding: 6px 30px 6px 15px;

  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-dark);
  background-color: var(--color-bg-light-main);
  border-radius: 6px;
  border-color: transparent;
  box-shadow: var(--box-shadow);

  transition: var(--transition);
`;

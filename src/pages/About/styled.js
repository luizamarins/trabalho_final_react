import styled from "styled-components";
import { Link as BaseLink } from "react-router-dom";

/*Header*/
export const Headers = styled.div`
  position: fixed;
  background-color: #fffd59;
  display: flex;
  justify-content: space-between;

  ul {
    margin: none;
    text-align: center;
    font-family: Oswald;
    font-size: 1.6rem;
    display: inline-block;
  }
`;

export const Logo = styled.img`
  object-fit: scale-down;
  width: 40%;
  height: 40%;
  float: left;
  margin-left: 20px;
  margin-top: 10px;
  padding: 10px;
  @media (min-width: 1000px) {
    width: 20%;
    height: 20%;
  }
`;

export const Link = styled(BaseLink)`
  text-decoration: none;
  &:hover {
    color: gray;
  }
  display: inline-flex;
  padding: 0.5em 1.5em;
  margin-top: 14px;
  color: darkorchid;
`;

/*Meio*/

export const Container = styled.div`
  padding: 100px;

  h1 {
    color: #323242;
    margin: 0;
    margin-top: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  font-size: 20px;

  header {
    background-color: whitesmoke;
    padding: 20px;
    border-radius: 15px;
    margin-top: 70px;
  }

  span {
    font-size: 35px;
    margin: 60px;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }
`;

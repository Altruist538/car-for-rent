import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  min-height: calc(40vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
  margin-bottom: 36px;
`;
export const Welcome = styled.p`
margin-top: 14px;
margin-bottom: 8px;
font-family: Manrope;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.5;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;


export const GoButton = styled(Link)`
 text-decoration: none;
  margin-top: 28px;
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #3470FF;;
  border-radius: 12px;
  border: none;
  cursor: pointer;

font-family: Manrope;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 1.5;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #0B44CD;
  }

`;
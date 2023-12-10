import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBlock = styled.div`
  width: 1440px;
  margin-right: auto;
  margin-left: auto;
  background-color: #0046ed;
  display: flex;
  justify-content: center;

  flex-direction: row;
  align-items: center;
`;
export const LinkHome = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.hover {
    color: #e84a5f;
  }
`;
export const LinkPhone = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.hover {
    color: #e84a5f;
  }
`;

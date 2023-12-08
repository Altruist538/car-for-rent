import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 29px;
    margin: 0px;
    padding: 0px;
    list-style: none;
`;
export const ListItem = styled.li`
    width: 274px;
    height: 426px;
 
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;
export const ImgCar = styled.img`
    width: 100%;
   height: 268px;
   border-radius: 10px;
`;
export const Container = styled.div`
    width: 1440px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;


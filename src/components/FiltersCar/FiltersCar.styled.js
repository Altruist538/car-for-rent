import styled from 'styled-components';

export const FiltersBlock = styled.div`
  margin: 20px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  gap: 18px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const InputBlockFromTo = styled.div`
  display: flex;
`;
export const CarBrandInput = styled.input`
  height: 48px;
  width: 224px;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const FromInput = styled.input`
  height: 48px;
  width: 160px;
  background-color: #f7f7fb;
  border-radius: 14px 0 0 14px;
  border-top: none;
  border-right: 2px solid #cccccf;
  border-bottom: none;
  border-left: none;
`;
export const ToInput = styled.input`
  height: 48px;
  width: 160px;
  background-color: #f7f7fb;
  border-radius: 0 14px 14px 0;
  border: none;
`;

export const SearchButton = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;

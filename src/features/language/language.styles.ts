import styled from 'styled-components';

export const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`;

interface IProps {
  isActive: boolean;
}
/* .language-button.active {
  color: white;
  background-color: #17589f;
} */

export const LanguageButtonWrapper = styled.button<IProps>`
  background-color: white;
  padding: 4px 2px;
  margin-right: 10px;
  color: ${(props) => props.isActive && 'white'};
  background-color: ${(props) => props.isActive && '#17589f'};
`;

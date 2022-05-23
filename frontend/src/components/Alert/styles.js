import styled from 'styled-components';

export const AlertDrawer = styled.div`
  align-items: flex-start;
  padding: 15px 30px;
  background:${props => (props.type === 'danger' ? '#f8d7da' : '#d4edda')};
  border: ${props => (props.type === 'danger' ? `2px solid #f44336` : `2px solid #c3e6cb`)};
  color: ${props => (props.type === 'danger' ? '#f44336' : '#155724')};
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  border-radius: 16px;
  position:fixed;
  top:90%;
  left:60%;
  z-index: 9999;
`;

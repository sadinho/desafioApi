import styled from 'styled-components';

export const Styles = styled.div`
  padding: 0;
  table {
    border-spacing: 0;
    border: 0px solid black;
    border-radius: 2px;
    align-items: flex-start;
    align-content: flex-start;
  }
  th {
    text-align: left;
    align-self: left;
    padding-left: 20px;
    font-weight: bold;
    font-size: 18px;
    text-transform: capitalize;
  }
  th:first-child {
    border-radius: 4px 0 0 0;
  }
  th:last-child {
    border-radius: 0 4px 0 0;
  }
  tr {
    width: 100%;
    height: 40px;
    background-color: #C6C6C6;
  }
  & .header0 {
    width: 114px;
  }
  & .header1 {
    width: 400px;
  }
  & .header2 {
    width: 900px;
  }
  & .header3 {
    width: 115px;
  }
  `;

export const TableRowWrapper = styled.tr`
  td {
    height: 54px;
    border-bottom: 1px solid #CDD5E5;
    background-color: #fff;
    font: normal 400 14px/1.4em "Open Sans", sans-serif;
    padding-left: 20px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.align ? props.align : 'start')};
`;

export const ButtonPagination = styled.button`
  padding: 10px;
  background: transparent;
  border: none;
  margin-right: 0;
  text-transform: uppercase;
  font: normal bold 14px/1.4em "Open Sans", sans-serif;
  
  svg {
  padding:0 5px;
  cursor: pointer;
  }
`;

export const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    margin-right: 5px; 
  }

  select {
    text-align-last: center;
    width: 66px;
    height: 32px;
    margin-right: 20px;
    border: 2px solid #C6C6C6;
    background: none;
  }

  option {
    text-align: center;
  }

  p {
    margin-right: 28px;
  }
`;

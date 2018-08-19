import styled from 'styled-components';

const HorizontalColumns = styled.div`
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export { HorizontalColumns };

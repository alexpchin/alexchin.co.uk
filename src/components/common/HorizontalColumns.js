import styled from 'styled-components';

const HorizontalColumns = styled.div`
  display: flex;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export { HorizontalColumns };

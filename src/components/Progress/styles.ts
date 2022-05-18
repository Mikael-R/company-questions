import styled from 'styled-components'

export const Progress = styled.progress`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 6px;

  border-radius: 6px;

  box-shadow: 0px 2px 5px rgba(49, 216, 179, 0.35);

  ::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 6px;
  }
  ::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colors.gray300};

    transition: width 0.8s ease;
  }
`

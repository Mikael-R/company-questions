import styled from 'styled-components'

export const Wrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: auto;
`

export const Questions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`

export const Texts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray300};
  }

  span:first-child {
    font-style: normal;
    font-weight: 700;
  }

  span:last-child {
    font-style: thin;
    font-weight: 300;
  }
`

interface CircleProps {
  background: string
  selected: boolean
}

export const Circle = styled.button<CircleProps>`
  width: 36px;
  height: 36px;

  @media (min-width: 1024px) {
    width: 42px;
    height: 42px;
  }

  ${({ background }) => `background: ${background};`}

  ${({ selected, theme }) =>
    selected
      ? `border: 2px solid ${theme.colors.green300};`
      : `border: 1px solid ${theme.colors.gray200};`}

border-radius: 100%;
  outline: none;
  cursor: pointer;

  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.07));
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;

  &:hover {
    box-shadow: 0px 7px 14px ${({ theme }) => theme.colors.gray200};
    transform: translateY(-5px);
  }
`

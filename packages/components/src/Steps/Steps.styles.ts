import styled from 'styled-components';

export const StepsRoot = styled.div``;

export const StepsWrapper = styled.div`
  display: flex;
  align-items: center;

  &.steps-tab {
    background-color: ${({ theme }) => theme.palette.accents_1};
    height: 64px;
    padding: 0 20px;
  }
`;

export const StepsContent = styled.div`
  padding-top: 16px;
`;

interface SeparatorProps {
  $active: boolean;
}

export const StepsSeparator = styled('div')<SeparatorProps>`
  flex: 1 1 0%;
  height: 2px;
  margin: 0 10px;
  background-color: ${({ $active, theme }) => ($active ? '#00aa72' : theme.palette.accents_2)};
`;

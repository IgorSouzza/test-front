import styled from 'styled-components';

interface ItemProps {
  selected?: boolean;
}

export const Container = styled.div`
  background: var(--color-white);
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`;

export const Item = styled.span<ItemProps>`
  color: ${
    (props) => props.selected ? 'var(--color-orange)' : 'var(--color-gray)'
  };
  font-size: 13px;
  font-weight: bold;
`;

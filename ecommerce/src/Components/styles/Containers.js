import styled from "styled-components";


export const Menu = styled.nav`
    display: flex;
    height: 50px;
    background-color: rgb(162, 76, 56);
    align-items: center;
    justify-content: space-around;
    `;

export const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    width: 100%;
    justify-content: center;
    gap: 16px;
    align-items: center;
    `;


export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color: #f5f5f5;
    border-radius: 50px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    margin: 0 auto;
    box-sizing: border-box;
  `;


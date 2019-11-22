import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: red;
  justify-content: space-evenly;
`;

const Card = styled.div`
display: flex;
width: 90%;
flex-direction: row;
height: 400px;
margin: 0 auto;
padding: 50px;
justify-content: space-evenly;
`

export { Card, Container };

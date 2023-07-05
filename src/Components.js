import styled, {css} from "styled-components";

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-decoration: none;
  ${props => props.theme == 'dark' && css`
   background-color: #000;
   color: #fff;
   &:hover {
    background: red;
   }
  `}
`
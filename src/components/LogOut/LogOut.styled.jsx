import styled from "styled-components";

export const Email = styled.p`
font-style: italic;
`

export const Button = styled.button`
width: 100px;
background-color: aliceblue;
border: 1px solid grey;
border-radius: 4px;
    &:hover, &:focus {
        background-color: blue;
        color: white;
        border: 1px solid white;
    }
`
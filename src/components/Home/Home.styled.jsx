import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
width: 100px;
weight: 700;
text-align: center;
background-color: aliceblue;
border: 1px solid grey;
border-radius: 4px;
    &:not(:last-child){
        margin-right: 10px;
    }
    &:hover, &:focus {
        background-color: #46b5ff;
        color: white;
        border: 1px solid white;
    }
`

export const Box = styled.section`
background-color: white;
margin: 0 20px;
`

export const Div = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 35px;
padding: 20px 20px;
`

export const Img = styled.img`
display: block;
width: 70%;
margin: 0 auto;
`
export const H1=styled.h1`
font-size: 28px;
font-weight: 700;
text-align: center;
border: 1px solid blue;
`
export const SectionContacts = styled.section`
display: flex;
justify-content: space-between;
align-items: flex-start;
`
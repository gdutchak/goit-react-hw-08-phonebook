import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display: block;
margin-top: 30px;
`

export const LinkError = styled(NavLink)`
display: block;
font-size: 13px;
color: blue;
text-align: center;
`

export const ErrorMessage = styled.p`
text-align: center;
`
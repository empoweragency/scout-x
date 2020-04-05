import React from "react"
import theme from "../_theme"
import styled from "styled-components"
import { truncate } from "../../lib/utils"
import { Link } from "react-router-dom"

const Outer = styled.li`
    padding: 25px;
    background: ${theme.white};
    box-shadow: 0px 2px 10px ${theme.cardShadow}80;
    margin-bottom: 15px;
    transition: box-shadow 0.2s ease-out;
    position: relative;
    &:hover{
        box-shadow: 0px 2px 12px ${theme.cardShadow};
    }
    &:focus-within{
        outline: 3px solid ${theme.focus};
    }
`

const StyledLink = styled(Link)`
    color: ${theme.text};
    text-decoration: none;
    &:before{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
    &:focus{
        border: 0;
        outline: none;
    }
`

const Name = styled.h3`
    margin-bottom: 10px;
    font-size: 1.3rem;
`

const Description = styled.p`
    color: ${theme.text};
    font-size: 0.9rem;
    margin-bottom: 15px;
    line-height: 1.5;
`

const CategoryTag = styled.span`
    display: inline-block;
    padding: 5px;
    font-size: 0.9rem;
    color: ${theme.link};
    background: ${theme.link}1A;
    border-radius: 2px;
`

const ServiceCard = ({
    name,
    description
}) =>
    <Outer>
        <StyledLink to="#">
            <Name>{name}</Name>
        </StyledLink>
        <Description>{truncate(description, 18)}</Description>
        <CategoryTag>Category</CategoryTag>
    </Outer>

export default ServiceCard
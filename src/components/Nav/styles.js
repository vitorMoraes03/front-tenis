import styled from "styled-components";
import { StyledFlex } from "../../global";

export const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 var(--space-medium);
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    background-color: var(--main-color);
`

export const StyledLinks = styled(StyledFlex)`
    div {
        display: flex;
        align-items: center;
    }

    div:hover {
        cursor: pointer;
    }

    h1 {
        font-size: var(--font-logo);
        margin-bottom: -2px;
        text-transform: none;
    }

    img {
        height: var(--icons-size);
    }

    a {
        font-size: var(--font-medium);
        text-transform: uppercase;
    }
`
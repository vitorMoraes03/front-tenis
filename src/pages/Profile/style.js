import styled from "styled-components";
import { StyledSignUpContainer } from "../SignUp/styles";

export const StyledProfileContainer = styled(StyledSignUpContainer)`
    .container-btn {
        display: flex;
        gap: var(--space-small);
        justify-content: center;
        margin-top: var(--space-medium);
    }
`
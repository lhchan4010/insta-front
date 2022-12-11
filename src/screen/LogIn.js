import styled from "styled-components";
import { isLoggedInVar } from "../apollo";

const Title = styled.h1`
    font-size: 50px;
`;

const Btn = styled.button`
    width: 100px;
    background-color: #355c7d;
    color: whitesmoke;
    border-radius: 10px;
`;

export const LogIn = () => {
    return (
        <div>
            <Title>Log In</Title>
            <Btn onClick={() => isLoggedInVar(true)}>Log In</Btn>
        </div>
    );
};

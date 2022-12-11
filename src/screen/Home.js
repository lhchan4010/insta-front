import { useState } from "react";
import styled from "styled-components";
import { isDarkModeVar, isLoggedInVar } from "../apollo";

const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.bgColor};
    font-size: ${(props) => (props.big ? "50px" : "100px")};
`;

const Btn = styled.button`
    width: 100px;
    background-color: #355c7d;
    color: ${(props) => props.theme.fontColor};
    border: 0;
    border-radius: 10px;
    margin-left: 5px;
`;

export const Home = ({ isDarkMode }) => {
    const [big, setBig] = useState(false);

    return (
        <div>
            <Title big={big}>Home</Title>
            <Btn onClick={() => isLoggedInVar(false)}>Log Out</Btn>
            <Btn
                id="sizeToggle"
                onClick={() => {
                    setBig(!big);
                    let btn = document.getElementById("sizeToggle");
                    big ? (btn.innerText = "small") : (btn.innerText = "big");
                }}
            >
                {big ? "big" : "small"}
            </Btn>
            <Btn
                onClick={() => {
                    isDarkModeVar(!isDarkMode);
                }}
            >
                {isDarkMode ? "light" : "dark"}
            </Btn>
        </div>
    );
};

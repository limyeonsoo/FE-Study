import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background: blue;
    font-size: 1.5rem;
    color: white;
    width: 128px;
    height: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Red = () => {
    return (
        <StyledDiv>Blue</StyledDiv>
    )
}
export default Red;
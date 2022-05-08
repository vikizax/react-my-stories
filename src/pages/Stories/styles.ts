import styled from 'styled-components';

export const StoryBody = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #111;
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`

export const StoryControlsOverlay = styled.div`
    position: absolute;
    height: inherit;
    width: inherit;
    display: flex;
`;

export const StoryControls = styled.div`
    width: 50%;
    z-index: 999;
`
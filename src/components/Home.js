import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'

function Home() {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

export default Home

const Container = styled.main`
    padding: 0 calc(3.5vw + 5px);
    height: 100vh;
    overflow-x: hidden;
    &:before {
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`



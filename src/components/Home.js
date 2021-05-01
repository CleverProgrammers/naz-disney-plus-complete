import React, { useEffect }  from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";


function Home() {
    const dispatch = useDispatch();

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });

            console.log(tempMovies);
            dispatch(
                setMovies(tempMovies)
            );
        })
    }, [])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    padding: 0 calc(3.5vw + 5px);
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    position: relative;

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



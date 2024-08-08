import pokemonNotFound from '../assets/img/pokemon-go-1574001_1280.webp'
import styled from "styled-components"
import Nav from "../components/Nav"

export default function NotFound() {
    return (
        <>
        <Nav />
        <Container>
            <h1>Page not found</h1>
            <img src={pokemonNotFound} alt="not-found"/>
        </Container>
        </>
    )
}

const Container = styled.div`
    text-align: center;
    img {
        max-width: 30vw;
    }
`
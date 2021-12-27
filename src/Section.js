import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title , description , leftbtnText , rightbtnText ,backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description}</p>
            </ItemText>   
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        { leftbtnText }
                    </LeftButton>
                    { rightbtnText && 
                        <RightButton>
                          { rightbtnText }
                        </RightButton>
                 }
                </ButtonGroup>
                <DownArrow OnClick={ () => } src="/images/down-arrow.svg"/> 
            </Buttons>
            </Fade>  
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    background-image: ${ props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:20px;
    @media(max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    margin 2%;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:13px;
    cursor:pointer;
`

const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
    opacity: 0.75;
`

const DownArrow = styled.img`
    margin-top:20px;
    width:100%;
    height:40px;
    overflow-x: hidden;
    cursor:pointer;
    animation: animateDown infinite 1.5s;

`
const Buttons = styled.div`

`
import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online For Touchless delivery"
                backgroundImg="/images/model-s.jpg"
                leftbtnText="Custom order"
                rightbtnText="Existing inventory"
            />
            <Section
                 title="Model Y"
                 description="Order Online For Touchless delivery"
                 backgroundImg="/images/model-y.jpg"
                 leftbtnText="Custom order"
                 rightbtnText="Existing inventory"
            />
            <Section
                 title="Model 3"
                 description="Order Online For Touchless delivery"
                 backgroundImg="/images/model-3.jpg"
                 leftbtnText="Custom order"
                 rightbtnText="Existing inventory"
            />
            <Section
                 title="Model X"
                 description="Order Online For Touchless delivery"
                 backgroundImg="/images/model-x.jpg"
                 leftbtnText="Custom order"
                 rightbtnText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panel in America"
                description="Money-back guarantee"
                backgroundImg="/images/solar-panel.jpg"
                leftbtnText="Order now"
                rightbtnText="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panel"
                backgroundImg="/images/solar-roof.jpg"
                leftbtnText="Order now"
                rightbtnText="Learn More"
            /> 
            <Section
                title="Accessories"
                description=""
                backgroundImg="/images/accessories.jpg"
                leftbtnText="Shop now"
                rightbtnText=""
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

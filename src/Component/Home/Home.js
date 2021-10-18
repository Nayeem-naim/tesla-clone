import React from 'react'
import styled from "styled-components"
import Section from '../Section/Section'
function Home() {
    return (
        <Container>
            <Section
                title="Model - S"
                description="Order Online for Touchess Dellivery"
                backgroundImg="model-s.jpg"
                leftBtn=" Custom Order"
                Rightbtn=" Existing Inventory"
            />
            <Section
                title="Model - Y"
                description="Order Online for Touchess Dellivery"
                backgroundImg="model-y.jpg"
                leftBtn=" Custom Order"
                Rightbtn=" Existing Inventory"
            />
            <Section
                title="Model - 3"
                description="Order Online for Touchess Dellivery"
                backgroundImg="model-3.jpg"
                leftBtn=" Custom Order"
                Rightbtn=" Existing Inventory"
            />
            <Section
                title="Model - X"
                description="Order Online for Touchess Dellivery"
                backgroundImg="model-x.jpg"
                leftBtn=" Custom Order"
                Rightbtn=" Existing Inventory"
            />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtn="ORDER NOW  "
                Rightbtn=" LEARN MORE "
            />
               <Section
                title="Solar Roof "
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtn="ORDER NOW  "
                Rightbtn="LEARN MORE "
            />
            <Section
                title="Accessories"
                backgroundImg="accessories.jpg"
                leftBtn="ORDER NOW"
            />


        </Container>
    )
}

export default Home
const Container = styled.div`
    hight: 100vh;
    `

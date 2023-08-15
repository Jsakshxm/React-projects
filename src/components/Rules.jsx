import styled from "styled-components"



const RulesContainer=styled.div`
display: inline-flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 24px;
background: #FBF1F1;
h2{
    color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
p{
    color: #000;
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}`



const Rules=()=>{
    return(

    <RulesContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
    )
}

export default Rules
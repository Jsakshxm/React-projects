import styled from "styled-components"


function StartGame({toggle}) {
  return (
    <div><Container>
        <img src="/images/dices.png" width = "649px"
height= "522px" />
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container></div>
  )
}

export default StartGame



const Container = styled.div`
max-width:1180px; 
display:flex;
height:100vh;
margin:0 auto;
align-items:center;
.content {h1{
    font-size:96px;
    white-space:nowrap;
}} `





const Button=styled.button`
display: flex;
width: 220px;
padding: 10px 18px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background: #000;
color:white;
font-size:16px;
cursor:pointer;
border:1px solid transparent;
transition: 0.4s background ease-in;
&:hover{
   background-color :white ;
   border:1px solid black;
   transition:0.3s background ease-in;
   color:black ;
}
`


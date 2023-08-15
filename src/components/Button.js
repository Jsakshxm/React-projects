import styled from "styled-components"
export  const Button=styled.button`
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

// export const outlinebutton=styled.Button`
//     color:black;
//     background: white;
//     &:hover{
//    background-color :black ;
//    border:1px solid black;
//    transition:0.3s background ease-in;
//    color:whitw;


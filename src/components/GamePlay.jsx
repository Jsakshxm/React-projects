import { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { Button } from "./Button";
import Rules from "./Rules"; // Make sure to import the correct path for the Rules component

const MainContainer = styled.main`
  /* Your styling rules for the MainContainer */
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [Dice, setDice] = useState(1);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");
  const [showrules, setshowrules] = useState(false);

  const generaterandomnumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handlechange = () => {
    if (!selectedNumber) {
      seterror("You have not selected any number");
      return;
    }
    seterror("");

    const random = generaterandomnumber(1, 7);
    setDice(random);

    if (random === selectedNumber) {
      setscore((prev) => prev + selectedNumber);
    } else {
      setscore((prev) => prev - 2);
    }
  };

  const resetScore = () => {
    setscore(0);
    setSelectedNumber(null); // Reset the selected number
  };

  const toggleRules = () => {
    setshowrules((prev) => !prev);
  };

  return (<div>
    <MainContainer>
      <TopSection>
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          seterror={seterror}
        />
        <RollDice Dice={Dice} setDice={setDice} handlechange={handlechange} />
        <div className="btn">
          <Button onClick={resetScore}>Reset</Button>
          <Button onClick={toggleRules}>
            {showrules ? "Hide" : "Show"} Rules
          </Button>
          
        </div>
      </TopSection>
      
    </MainContainer><div style={{justifyContent:"center",padding:"24px", alignitems :"center"}}>{showrules && <Rules />}</div>.</div>
  );
}

export default GamePlay;

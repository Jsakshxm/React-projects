
import styled from "styled-components";

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: 250px;
    height: 250px;
  }

  p {
    font-size: 24px;
  }
`;

const RollDice = ({ Dice, setDice, handlechange }) => {
  return (
    <DiceContainer>
      <div onClick={handlechange}>
        <img src={`/images/dice_${Dice}.png`} className="img" alt="Dice" />
      </div>
      <p>Click on dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

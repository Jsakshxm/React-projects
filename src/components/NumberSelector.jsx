
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-weight: 900;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Change to center alignment */

  .flex {
    display: flex;
    gap: 24px;
  }

  .error {
    font-size: 24px;
    font-weight: 700;
    color: red;
    position: absolute;
    top: 0;
  }
`;

const NumberSelector = ({ selectedNumber, setSelectedNumber, error, seterror }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const handleNumberClick = (value) => {
    setSelectedNumber(value);
    seterror(""); 
  };

  return (
    <div>
      <NumberSelectorContainer>
        {error && (
          <p
            className="error"
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "red",
              position: "absolute",
              top: 0,
            }}
          >
            {error}
          </p>
        )}
        <div className="flex">
          {array.map((value, i) => (
            <Box
              key={i}
              onClick={() => handleNumberClick(value)}
              isSelected={value === selectedNumber}
            >
              {value}
            </Box>
          ))}
        </div>
        {selectedNumber && <p>Selected Number: {selectedNumber}</p>}
      </NumberSelectorContainer>
    </div>
  );
};

export default NumberSelector;

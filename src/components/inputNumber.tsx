import React from "react";
import styled from "styled-components";
import PropTypes, { InferProps } from "prop-types";

const StyledInputNumberContainer = styled.div``;
const StyledInput = styled.input``;
const StyledLabel = styled.label``;

export default function InputNumber({
  value,
  setValue,
  label,
}: InferProps<typeof InputNumber.propTypes>) {
  const handleChange = (e: any) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <StyledInputNumberContainer>
      <StyledLabel>
        {label}
        <StyledInput type="number" value={value} onChange={handleChange} />
      </StyledLabel>
    </StyledInputNumberContainer>
  );
}
InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string,
};

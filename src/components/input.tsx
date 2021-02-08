import React from "react";
import styled from "styled-components";
import PropTypes, { InferProps } from "prop-types";

const StyledInputContainer = styled.div``;
const StyledInput = styled.input``;
const StyledLabel = styled.label``;

export default function Input({
  value,
  setValue,
  label,
}: InferProps<typeof Input.propTypes>) {
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <StyledInputContainer>
      <StyledLabel>
        {label}
        <StyledInput type="text" value={value} onChange={handleChange} />
      </StyledLabel>
    </StyledInputContainer>
  );
}
Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string,
};

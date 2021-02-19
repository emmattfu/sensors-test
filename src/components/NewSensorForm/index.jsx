import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledErrorMessage,
  StyledSelect,
} from "./styled";
import { useFormik } from "formik";
import { validation } from "./shape";
import { sensorTypes } from "../../constants";
import { StyledButton } from "../../styled";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addSensorLoading } from "../../store/slices/addSensorSlice";

const NewSensorForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: validation.shape,
    validationSchema: validation.schema,
    onSubmit: (values, onSubmitProps) => {
      const formData = {
        name: values.name,
        type: values.type,
        id: uuidv4(),
        dates: [],
        values: [],
        isActive: false,
      };
      dispatch(addSensorLoading({ formData, onSubmitProps }));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInputWrapper>
        <StyledLabel htmlFor='name'>Name</StyledLabel>
        <StyledInput
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name ? (
          <StyledErrorMessage>{formik.errors.name}</StyledErrorMessage>
        ) : null}
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel htmlFor='type'>Type</StyledLabel>
        <StyledSelect
          name='type'
          onChange={formik.handleChange}
          value={formik.values.type}
        >
          {sensorTypes.map((type, index) => (
            <option key={index} value={type.value}>
              {type.text}
            </option>
          ))}
        </StyledSelect>
        {formik.errors.type && formik.touched.type ? (
          <StyledErrorMessage>{formik.errors.type}</StyledErrorMessage>
        ) : null}
      </StyledInputWrapper>

      <StyledButton type='submit' disabled={formik.isSubmitting}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default NewSensorForm;

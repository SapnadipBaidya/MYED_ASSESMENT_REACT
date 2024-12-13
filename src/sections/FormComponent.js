import React, { useReducer } from "react";
import {
  TextField,
  Button,
  Box,
  Grid,
  Alert,
} from "@mui/material";
import "../App.css";

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    schoolName: "",
    city: "",
    email: "",
    phone: "",
    message: "",
  },
  errors: {
    email: "",
    phone: "",
  },
  isSubmitted: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const { field, value } = action.payload;

      let errors = { ...state.errors };
      if (field === "email") {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        errors.email = emailPattern.test(value)
          ? ""
          : "Please fill in a valid email format.";
      }
      if (field === "phone") {
        const phonePattern = /^[0-9]{10}$/;
        errors.phone = phonePattern.test(value)
          ? ""
          : "Please fill in a valid phone number format.";
      }

      return {
        ...state,
        formData: { ...state.formData, [field]: value },
        errors,
      };
    }

    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};


const formFields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "School Name", name: "schoolName", type: "text" },
  { label: "City", name: "city", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone Number", name: "phone", type: "tel" },
  { label: "Message", name: "message", type: "textarea", multiline: true, rows: 4 },
];

const FormComponent = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { formData, errors, isSubmitted } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", payload: { field: name, value } });
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim() !== "") &&
      errors.email === "" &&
      errors.phone === ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch({ type: "SUBMIT_FORM" });
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <Box className="form-container">
      <h1>Get Ready to board the Rocket!</h1>
        
      
      <h2>
        Let's align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </h2>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="form-grid">
          {formFields.map((field) => (
            <Grid
              key={field.name}
              item
              xs={12}
              sm={field.name === "message" ? 12 : 6}
            >
              <TextField
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                fullWidth
                variant="filled"
                multiline={field.multiline || false}
                rows={field.rows || 1}
                type={field.type}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                required
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!isFormValid()}
            >
              Send it to the moon 🚀
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleReset}
              fullWidth
              variant="outlined"
            >
              Reset Form
            </Button>
          </Grid>
        </Grid>
      </form>

      {isSubmitted && (
        <Alert severity="success" style={{ marginTop: "20px" }}>
          Your form has been submitted successfully!
        </Alert>
      )}
    </Box>
  );
};

export default FormComponent;
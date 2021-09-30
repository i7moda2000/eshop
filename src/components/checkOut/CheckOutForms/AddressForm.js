import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const AdderssForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(data => {
            test({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption
            });
            alert("not functing yet");
          })}
        >
          <Grid container spacing={3}>
            <InputField required name="firstName" label="First name" />
            <InputField required name="lastName" label="Last name" />
            <InputField required name="address1" label="Address line 1" />
            <InputField required name="email" label="Email" />
            <InputField required name="city" label="City" />
            <InputField required name="zip" label="Zip / Postal code" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} variant="outlined" to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AdderssForm;

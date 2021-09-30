import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function InputField({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        component={TextField}
        name={name}
        control={control}
        label={label}
        error={isError}
        render={({ field }) => (
          <TextField fullWidth label={label} required={required} />
        )}
      />
    </Grid>
  );
}

export default InputField;

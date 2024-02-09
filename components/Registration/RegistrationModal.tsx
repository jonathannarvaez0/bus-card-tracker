import { Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { forwardRef } from "react";

const RegistrationModal = forwardRef((props, ref) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg-white p-7 rounded-md flex flex-col shadow-lg gap-2 max-h-modalHeight overflow-auto">
        <h1 className="font-semibold">REGISTER</h1>
        <form>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 flex-col sm:flex-row">
              <TextField label={"First Name"}></TextField>
              <TextField label={"Last Name"}></TextField>
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
              <TextField label={"Username"}></TextField>
              <TextField label={"Password"}></TextField>
            </div>
            <div className="flex gap-2 flex-col sm:flex-row">
              <TextField label={"Email"}></TextField>

              <DatePicker label={"Birthdate"} className="w-56"></DatePicker>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                variant="contained"
                className="bg-accent hover:bg-sky-900"
                type="submit"
                disabled
              >
                Sign up
              </Button>
            </div>
          </div>
        </form>
      </div>
    </LocalizationProvider>
  );
});

export default RegistrationModal;

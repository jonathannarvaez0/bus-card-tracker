"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Login() {
  interface Login {
    username: string;
    password: string;
  }

  const [loginDetails, setLoginDetails] = useState<Login>({
    username: "",
    password: "",
  });

  const TextFieldHandler = (
    textfield: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let deepcopyoflogin = JSON.parse(JSON.stringify(loginDetails));

    switch (textfield) {
      case "username":
        deepcopyoflogin.username = event.target.value;
        break;
      case "password":
        deepcopyoflogin.password = event.target.value;
        break;
      default:
        break;
    }

    setLoginDetails(deepcopyoflogin);
  };

  return (
    <main className="flex justify-center items-center p-6 min-h-svh">
      <div className="bg-slate-300 p-6 rounded-md flex flex-col shadow-lg gap-2">
        <h1 className="font-semibold">LOGIN</h1>
        <div className="flex flex-col gap-3">
          <TextField
            label={"Username"}
            value={loginDetails.username}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              TextFieldHandler("username", event)
            }
          ></TextField>
          <TextField
            label={"Password"}
            value={loginDetails.password}
            type="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              TextFieldHandler("password", event)
            }
          ></TextField>
          <div className="flex justify-end gap-3 ">
            <Button variant="contained" className="bg-accent ">
              Login
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

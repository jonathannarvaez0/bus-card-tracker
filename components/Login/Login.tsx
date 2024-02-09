"use client";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContextUsage } from "../Context/ApplicationContext";

interface LoginProps {
  reload: () => void;
}

export default function Login(props: LoginProps) {
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

  let context = ContextUsage();
  // React Hook Form
  const { register, handleSubmit } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = (data) => {
    context.LoginStateRefreshher();
  };

  return (
    <main className="flex justify-center items-center p-6 min-h-svh">
      <div className="bg-slate-300 p-6 rounded-md flex flex-col shadow-lg gap-2">
        <h1 className="font-semibold">LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <TextField
              label={"Username"}
              // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              //   TextFieldHandler("username", event)
              // }
              {...register("username")}
            ></TextField>
            <TextField
              label={"Password"}
              type="password"
              {...register("password")}
            ></TextField>
            <div className="flex justify-end gap-3">
              <Button
                variant="contained"
                className="bg-accent hover:bg-sky-900"
                type="submit"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

"use client";
import { useState } from "react";
import { Button, Modal, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContextUsage } from "../Context/ApplicationContext";
import RegistrationModal from "../Registration/RegistrationModal";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
    context.LoginStateRefreshher();
  };

  const [showRegistrationModal, setShowRegistrationModal] =
    useState<boolean>(false);

  return (
    <main className="flex justify-center items-center p-6 min-h-svh">
      <div className="bg-slate-300 p-7 rounded-md flex flex-col shadow-lg gap-2">
        <h1 className="font-semibold">LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div>
              <TextField
                label={"Username"}
                // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                //   TextFieldHandler("username", event)
                // }
                {...register("username", {
                  required: "Username can't be blank",
                })}
                error={errors.username?.ref?.value == ""}
              ></TextField>
              <p className="text-red-600 text-xs">{errors.username?.message}</p>
            </div>
            <div>
              <TextField
                label={"Password"}
                type="password"
                {...register("password", {
                  required: "Username can't be blank",
                })}
                error={errors.password?.ref?.value == ""}
              ></TextField>
              <p className="text-red-600 text-xs">{errors.password?.message}</p>
            </div>
            <p
              className="text-sky-600 text-sm hover:underline hover:cursor-pointer"
              onClick={() => setShowRegistrationModal(true)}
            >
              No account?
            </p>
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

      <Modal
        open={showRegistrationModal}
        className="flex justify-center items-center p-6"
        onClose={() => setShowRegistrationModal(false)}
      >
        <RegistrationModal></RegistrationModal>
      </Modal>
    </main>
  );
}

import { signInWithGoogle } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const signInFlow = async () => {
    const isAuthenticated = await signInWithGoogle();
    if (isAuthenticated) await router.push("/");
    else {
      setError(true);
    }
  };

  return (
    <div
      className={
        "w-screen h-screen flex flex-col items-center justify-center gap-8 bg-mainDark text-white"
      }
    >
      <div className={"flex flex-col items-center justify-center gap-4"}>
        <p className={"text-4xl"}>Welcome to Whatsapp Web</p>
        <p className={"text-sm"}>Made by Rohan :)</p>
      </div>
      <div
        className={
          "flex items-center justify-between h-[60px] border rounded-md min-w-[200px] cursor-pointer"
        }
      >
        <div className={"h-full w-1/4 flex items-center justify-center"}>
          <Image
            src={"/icons/google.svg"}
            alt={"Google"}
            height={30}
            width={30}
          />
        </div>
        <div className={"w-3/4"} onClick={() => signInFlow()}>
          <p>Sign in with Google</p>
        </div>
      </div>
      {error && (
        <div>
          <p className={"text-red-600"}>Something went wrong !</p>
        </div>
      )}
    </div>
  );
};

export default Login;

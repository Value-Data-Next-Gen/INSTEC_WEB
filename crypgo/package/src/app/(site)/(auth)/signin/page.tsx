import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión | INSTEC",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="Iniciar sesión" />

      <Signin />
    </>
  );
};

export default SigninPage;

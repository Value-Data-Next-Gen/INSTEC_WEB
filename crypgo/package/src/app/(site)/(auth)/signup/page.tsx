import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear cuenta | INSTEC",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Crear cuenta" />

      <SignUp />
    </>
  );
};

export default SignupPage;

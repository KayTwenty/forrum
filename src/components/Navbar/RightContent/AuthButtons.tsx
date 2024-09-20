import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
// import { authModalAtom } from "../../../atoms/authModalAtom";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant="outline"
        height="35px"
        display={{ base: "none", md: "flex" }}
        width={{ base: "70px", md: "110px" }} 
        mr={2}
        ml={2}
        onClick={() => setAuthModalState({ open: true, view: "login" })} // When clicked execute this function, the modal is opened in the log in view
      >
        Log In
      </Button>
      <Button
        height="35px"
        display={{ base: "none", md: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: "signup" })} // When clicked execute this function, the modal is opened in the sign up view
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;
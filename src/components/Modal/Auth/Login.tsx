import React, { useState } from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState, AuthModalState } from "../../../atoms/authModalAtom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState); // Set global state
  const [loginForm, setLoginForm] = useState({
    email: "", // Initially empty email
    password: "", // Initially empty password
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  /**
   * This function is used as the event handler for a form submission.
   * It will attempt to sign in the user with the provided email and password.
   * @param event  (React.FormEvent): the submit event triggered by the form
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    signInWithEmailAndPassword(loginForm.email, loginForm.password); // Attempt to sign in the user
  };

  /**
   * Function to execute when the form is changed (i.e. when the user types in the form)
   * Mutiple inputs use the same onChqange function.
   * @param event (React.ChangeEvent<HTMLInputElement>): the change event triggered by the input
   */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the login form state with the new value
    setLoginForm((prev) => ({
      ...prev, // Spread previous state because we don't want to lose the other key-value pairs
      [event.target.name]: event.target.value, // Catch the name of the input that was changed and update the coressponding state
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          borderColor: "gray.400",
          border: "1px solid",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          borderColor: "gray.500",
          border: "1px solid",
        }}
      />
      <Input
        required
        name="password"
        placeholder="Password"
        type="password"
        mb={2}
        onChange={onChange}
        fontSize="10pt"
        bg="gray.50"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          borderColor: "gray.400",
          border: "1px solid",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          borderColor: "gray.500",
          border: "1px solid",
        }}
      />

      <Text textAlign="center" color="red" fontSize="10pt" fontWeight="800">
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>

      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        isLoading={loading}
      >
        {" "}
        {/* When the form is submitted, execute onSubmit function */}
        Log In
      </Button>

      <Flex fontSize="9pt" justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          color="gray.900"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "resetPassword",
            }))
          }
        >
          Reset Password
        </Text>
      </Flex>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Want to join the papers? </Text>
        <Text
          color="gray.900"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;

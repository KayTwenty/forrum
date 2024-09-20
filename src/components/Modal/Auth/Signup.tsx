import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"; 

const Signup = () => {
  const setAuthModalState = useSetRecoilState(authModalState); // Set global state for auth modal
  const [signUpForm, setSignUpForm] = useState({
    email: "", // Initially empty email
    password: "", // Initially empty password
    confirmPassword: "", // Initially empty confirm password
  });
  const [error, setError] = useState(""); // Initially no error
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);

  /**
   * This function is used as the event handler for the form submission.
   * It is responsible for creating a new user account with the provided email and password.
   * 
   * @param event (React.FormEvent): The submit event is triggered by the form
   */

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      // If the password and confirm password do not match
      setError("Passwords do not match");
      return; // Return so that the fucntion does not continue
    }
    // Create a new user account with the provided email and password
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
  };

  /**
   * Function to execute when the input fields change.
   * It updates the state of the input fields.
   * @param event (React.ChangeEvent<HTMLInputElement>): The event triggered by the input field
   */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update form state with the new value
    setSignUpForm((prev) => ({
      ...prev, // Spread the previous state
      [event.target.name]: event.target.value, // Catch the name of the input that was changed and update the corresponding state
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
      <Input
        required
        name="confirmPassword"
        placeholder="Confirm Password"
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
        {error ||
          FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}  
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
        {/* When the form is submitted, execute the onSubmit function */}
        Sign Up
      </Button>

      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already an Author? </Text>
        <Text
          color="gray.800"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};
export default Signup;

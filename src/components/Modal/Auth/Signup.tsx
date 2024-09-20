import { authModalState } from "@/atoms/authModalAtom";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const Signup: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "", // Initially empty email
    password: "", // Initially empty password
    conformPassword: "",
  });

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form>
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
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">
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

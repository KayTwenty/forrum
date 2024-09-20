import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { FIREBASE_ERRORS } from "../../../firebase/errors";

const OAuthButtons: React.FC = ({}) => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);

  return (
    <Flex direction="column" width="100%" mb={2} mt={2}>
      {/* Google */}
      <Button
        variant="oauth"
        mb={2}
        isLoading={loadingGoogle}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src="/image/google.png"
          alt="Continue with Google"
          mr={2}
          height="30px"
        />
        Continue with Google
      </Button>

      {/* GitHub */}
      <Button
        variant="oauth"
        mb={2}
        isLoading={loadingGithub}
        onClick={() => signInWithGithub()}
      >
        <Image
          src="/image/github.png"
          alt="Continue with GitHub"
          mr={2}
          height="30px"
        />
        Continue with GitHub
      </Button>

      {/* Apple */}
      <Button
        variant="oauth"
        mb={2}
        isLoading={false}
        onClick={() => {}}
      >
        <Image
          src="/image/apple.png"
          alt="Sign in with Apple"
          mr={2}
          height="30px"
        />
        Sign in with Apple
      </Button>

      {/* If there is an error than the error is shown */}
      {errorGoogle && <Text textAlign="center" color="red" fontSize="10pt" fontWeight="800">
        {FIREBASE_ERRORS[errorGoogle?.message as keyof typeof FIREBASE_ERRORS]}</Text>}
      {errorGithub && <Text textAlign="center" color="red" fontSize="10pt" fontWeight="800">
        {FIREBASE_ERRORS[errorGithub?.message as keyof typeof FIREBASE_ERRORS]}</Text>}
    </Flex>
  );
};

export default OAuthButtons;
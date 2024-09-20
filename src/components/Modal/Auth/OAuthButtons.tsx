import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = ({}) => {

  return (
    <Flex direction="column" width="100%" mb={2} mt={2}>
      {/* GitHub */}
      <Button
        variant="oauth"
        mb={2}
        isLoading={false}
        onClick={() => {}}
      >
        <Image
          src="/image/github.png"
          alt="Continue with GitHub"
          mr={2}
          height="30px"
        />
        GitHub
      </Button>
    </Flex>
  );
};

export default OAuthButtons;
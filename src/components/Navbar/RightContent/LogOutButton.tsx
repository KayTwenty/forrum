import { auth } from "@/firebase/clientApp";
import { Button } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";

const LogOutButton: React.FC = () => {
    return (
        <Button
            height="35px"
            display={{ base: "none", md: "flex" }}
            width={{ base: "70px", md: "110px" }}
            mr={2}
            ml={2}
            onClick={() => signOut(auth)}
        >
            Log Out
        </Button>
    );
};

export default LogOutButton;
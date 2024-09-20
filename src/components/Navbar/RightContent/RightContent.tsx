import AuthModal from "@/components/Modal/Auth/AuthModal";
import { auth } from "@/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons"

type RightContentProps = {
    user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? (
                    <Button
                        height="28px"
                        display={{ base: "none", md: "flex" }}
                        width={{ base: "70px", md: "110px" }}
                        mr={2}
                        ml={2}
                        onClick={() => signOut(auth)}
                    >
                        Log Out
                    </Button>
                ) : (
                    <AuthButtons />
                )}
            </Flex>
        </>
    );
};

export default RightContent;
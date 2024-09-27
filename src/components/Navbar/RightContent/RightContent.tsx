import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";
import AuthButtons from "./AuthButtons"
import Icons from "./Icons";
import LogOutButton from "./LogOutButton";
//import userMenu from "./UserMenu";

type RightContentProps = {
    user?: any | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
    return (
        <>
            <AuthModal />
            <Flex justify="center" align="center">
                {user ? <Icons /> : <AuthButtons />}
            </Flex>
        </>
    );
};

export default RightContent;
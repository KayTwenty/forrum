import { auth } from "@/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent"
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
    const [user, loading, error] = useAuthState(auth); // Will be passed to child components

    return (
        <Flex bg="white" height="80px" padding="6px 12px">
            <Flex align="center">
                <Image src="/image/Forrum.png" alt="Logo" height="80px" />

                {/* <Image
                    src="/image/Forrum.png"
                    height="46px"
                    display={{ base: "none", md: "unset" }}
                    alt="Website logo text"
                /> */}
            </Flex>
            <SearchInput />
            <RightContent user={user}/>
        </Flex>
    );
};

export default Navbar;
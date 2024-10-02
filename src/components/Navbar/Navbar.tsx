import { auth } from "@/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent/RightContent"
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
    const [user, loading, error] = useAuthState(auth); // Will be passed to child components

    return (
        <Flex 
            bg="white" 
            height="55px" 
            padding="6px 12px"
            justify={{ md: "space-between"}}
        >
            <Flex 
                align="center"
                width={{ base: "40px", md: "auto" }}
                mr={{ base: 0, md: 2 }}
            >
                {/* Logo which is always visible */}
                <Image src="/image/Forrum.png" alt="Logo" height="55px" />

                {/* <Image
                    src="/image/Forrum.png"
                    height="46px"
                    display={{ base: "none", md: "unset" }}
                    alt="Website logo text"
                /> */}
            </Flex>
            {user && <Directory />}
            <SearchInput user={user} />
            <RightContent user={user}/>
        </Flex>
    );
};

export default Navbar;
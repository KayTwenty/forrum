import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
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
        </Flex>
    );
};

export default Navbar;
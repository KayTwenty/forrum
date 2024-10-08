import {SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type SearchInputProps = {
    user?: User | null;
};

const SearchInput: React.FC<SearchInputProps> = ({user}) => {
    return (
        // Navbar limit is 600px when the user is logged in and automatic when not logged in
        <Flex flexGrow={1} maxWidth={user ? "auto" : "600px"} mr={2} align="center">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.500" mb={1} />}
                />
                <Input
                    placeholder="Search for Forums"
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray.500",
                    }}
                    _focus={{
                        outline: "none",
                        border: "1px solid",
                        borderColor: "gray.800",
                    }}
                    height="34px"
                    bg="gray.100"
                />
            </InputGroup>
        </Flex>
    )
}

export default SearchInput;
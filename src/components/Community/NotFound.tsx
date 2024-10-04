import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
const CommunityNotFound: React.FC = () => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight="60vh"
        >
            These aren't the communities you're looking for.
            <Link href="/">
                <Button mt={4}>Home</Button>
            </Link>
        </Flex>
    );
};

export default CommunityNotFound;
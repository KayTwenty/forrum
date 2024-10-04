import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Box,
    Text,
    Input,
    Stack,
    Checkbox,
    Flex,
    Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillEyeFill, BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

type CreateCommunityModalProps = {
    open: boolean,
    handleClose: () => void,
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
    open,
    handleClose,
}) => {
    const communityNameLengthLimit = 25;
    const [communityName, setCommunityName] = useState("");
    const [charRemaining, setCharRemaining] = useState(communityNameLengthLimit);
    const [communityType, setCommunityType] = useState("public");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Community is not allowed to exceed the character limit
        if (event.target.value.length > communityNameLengthLimit) return;
        setCommunityName(event.target.value);
        // Compute the remaining characters for the community name
        setCharRemaining(communityNameLengthLimit - event.target.value.length);
    };

    const onCommunityTypeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCommunityType(event.target.name);
    }

    return (
        <>
            <Modal isOpen={open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        display="flex"
                        flexDirection="column"
                        padding={3}
                        textAlign="center"
                    >
                        Create Community
                    </ModalHeader>
                    <Box pl={3} pr={3}>
                        <ModalCloseButton />
                        <ModalBody display="flex" flexDirection="column" padding="10px 0px">
                            <Text fontWeight={600} fontSize={15}>
                                Name
                            </Text>
                            <Text fontSize={11} color="gray.500">
                                Community names including capitalization cannot be changed.
                            </Text>
                            <Input
                                mt={2}
                                value={communityName}
                                placeholder="Community Name"
                                onChange={handleChange}
                                borderColor="gray.400"
                            />
                            <Text
                                fontSize="9pt"
                                mt={1}
                                color={charRemaining === 0 ? "red" : "gray.500"}
                            >
                                {charRemaining} characters remaining
                            </Text>
                            <Box mt={4} mb={4}>
                                <Text fontWeight={600} fontSize={15}>
                                    Community Type
                                </Text>
                                <Stack spacing={2}>
                                    <Checkbox
                                        name="public"
                                        isChecked={communityType === "public"}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center">
                                            <Icon as={BsFillPersonFill} color="gray.500" mr={2} />
                                            <Text fontSize="10pt" mr={1}>
                                                Public
                                            </Text>
                                            <Text fontSize="8pt" color="gray.500" pt={1}>
                                                Everyone can see and post in this community
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox
                                        name="restricted"
                                        isChecked={communityType === "restricted"}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center">
                                            <Icon as={BsFillEyeFill} color="gray.500" mr={2} />
                                            <Text fontSize="10pt" mr={1}>
                                                Restricted
                                            </Text>
                                            <Text fontSize="8pt" color="gray.500" pt={1}>
                                                Everyone can see this community, but only members can post
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox
                                        name="private"
                                        isChecked={communityType === "private"}
                                        onChange={onCommunityTypeChange}
                                    >
                                        <Flex align="center">
                                            <Icon as={HiLockClosed} color="gray.500" mr={2} />
                                            <Text fontSize="10pt" mr={1}>
                                                Private
                                            </Text>
                                            <Text fontSize="8pt" color="gray.500" pt={1}>
                                                Only members can see and post in this community
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                </Stack>
                            </Box>
                        </ModalBody>
                    </Box>
                    <ModalFooter
                        bg="gray.100"
                        borderRadius="0px 0px 10px 10px"
                    >
                        <Button
                            variant="outline"
                            height="35px"
                            mr={3}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            height="35px"
                            onClick={() => {}}
                        >
                            Create Community
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateCommunityModal;

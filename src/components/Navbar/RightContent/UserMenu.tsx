import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Icon,
    Flex,
    MenuDivider,
    Text,
} from "@chakra-ui/react"
import { signOut, User } from "firebase/auth";
import React, { use } from "react";
import { MdAccountCircle } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "@/firebase/clientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type UserMenuProps = {
    user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user}) => {
    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <Menu>
            <MenuButton
                cursor="pointer"
                padding="0px 6px"
                borderRadius={4}
                _hover={{
                    outline: "1px solid",
                    outlineColor: "gray.200",
                }}
            >
                <Flex align="center">
                    <Flex align="center">
                        {user ? (
                            <>
                                <Icon
                                    fontSize={24}
                                    mr={1}
                                    color="gray.300"
                                    as={MdAccountCircle}
                                />
                                <Flex
                                    direction="column"
                                    display={{ base: "none", lg: "flex"}}
                                    fontSize="8pt"
                                    align="flex-start"
                                    mr={8}
                                >
                                    <Text fontWeight={700}>
                                        {user?.displayName || user.email?.split("@")[0]}
                                    </Text>
                                    <Flex>
                                        <Icon as={IoSparkles} color="brand.100" mr={1} />
                                        <Text color="gray.400">1 KARMA</Text>
                                    </Flex>
                                </Flex>
                            </>
                        ) : (
                            <Icon fontSize={24} color="gray.400" mr={1} as={VscAccount} />
                        )}
                    </Flex>
                    <ChevronDownIcon />
                </Flex>
            </MenuButton>
            <MenuList>
                {user ? (
                    <>
                        <MenuItem
                            fontSize="10pt"
                            fontWeight={700}
                            _hover={{
                                bg: "gray.500",
                                color: "white",
                            }}
                        >
                            <Flex align="center">
                                <Icon fontSize={20} mr={2} as={CgProfile} />
                                Profile
                            </Flex>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                            fontSize="10pt"
                            fontWeight={700}
                            onClick={() => signOut(auth)}
                            _hover={{
                                bg: "gray.500",
                                color: "white",
                            }}
                        >
                            <Flex align="center">
                                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                                Log Out
                            </Flex>
                        </MenuItem>
                    </>
                ) : (
                    <>
                        <MenuItem
                            fontSize="10pt"
                            fontWeight={700}
                            onClick={() => setAuthModalState({ open: true, view: "login" })}
                            _hover={{
                                bg: "gray.500",
                                color: "white",
                            }}
                        >
                            <Flex align="center">
                                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                                Log In / Sign Up
                            </Flex>
                        </MenuItem>
                    </>
                )}
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Flex,
    Text,
    Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/core";
import { Star } from "react-feather";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";

export default function App() {
    return (
        <Provider store={store}>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/launches" element={<Launches />} />
                    <Route path="/launches/:launchId" element={<Launch />} />
                    <Route path="/launch-pads" element={<LaunchPads />} />
                    <Route
                        path="/launch-pads/:launchPadId"
                        element={<LaunchPad />}
                    />
                </Routes>
            </div>
        </Provider>
    );
}

function NavBar() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="6"
            bg="gray.800"
            color="white"
        >
            <Text
                fontFamily="mono"
                letterSpacing="2px"
                fontWeight="bold"
                fontSize="lg"
            >
                ¡SPACE·R0CKETS!
            </Text>
            <SlideInDrawer />
        </Flex>
    );
}

function SlideInDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuRef = React.useRef();

    return (
        <>
            <Box
                as={Star}
                width="6em"
                color="white"
                ref={menuRef}
                onClick={onOpen}
            />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={menuRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Favorites</DrawerHeader>

                    <DrawerBody></DrawerBody>

                    <DrawerFooter></DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

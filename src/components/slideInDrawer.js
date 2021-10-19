import React, { useRef } from "react";
import {
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

export default function SlideInDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuRef = useRef();

    return (
        <>
            <Box
                as={Star}
                width="6em"
                color="orange"
                ref={menuRef}
                onClick={onOpen}
            />
            <Drawer
                isOpen={isOpen}
                placement="right"
                size="sm"
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

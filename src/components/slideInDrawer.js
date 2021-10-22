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
    Text,
    Image,
    SimpleGrid,
    Flex,
    Badge,
    Button,
} from "@chakra-ui/core";
import { Star } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "../redux/selectors/favorites.selector";
import { Link } from "react-router-dom";
import {
    removeFromFavoriteLaunches,
    removeFromFavoriteLaunchPads,
} from "../redux/actions/favorite.actions";

export default function SlideInDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const menuRef = useRef();
    const favorites = useSelector(selectFavorites);

    return (
        <>
            <Box
                data-cy="navbar-fav-button"
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

                    <DrawerBody>
                        <Box>
                            <Box as="h1">Launches</Box>
                            <SimpleGrid
                                m={[2, null, 6]}
                                minChildWidth="350px"
                                spacing="4"
                            >
                                {favorites.favoriteLaunches.length > 0 ? (
                                    favorites.favoriteLaunches.map((launch) => (
                                        <DrawerItemLaunch
                                            launch={launch}
                                            key={launch.flight_number}
                                        />
                                    ))
                                ) : (
                                    <Text fontSize="sm">
                                        Your favorite Launches list is empty
                                    </Text>
                                )}
                            </SimpleGrid>
                            <Box as="h1">Launch Pads</Box>
                            <SimpleGrid
                                m={[2, null, 6]}
                                minChildWidth="350px"
                                spacing="4"
                            >
                                {favorites.favoriteLaunchPads.length > 0 ? (
                                    favorites.favoriteLaunchPads.map(
                                        (launchPad) => (
                                            <DrawerItemLaunchPad
                                                launchPad={launchPad}
                                                key={launchPad.id}
                                            />
                                        )
                                    )
                                ) : (
                                    <Text fontSize="sm">
                                        Your favorite Launch Pad list is empty
                                    </Text>
                                )}
                            </SimpleGrid>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter></DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

function DrawerItemLaunch({ launch }) {
    const dispatch = useDispatch();

    const handleFavoriteLaunch = (launch) => {
        dispatch(removeFromFavoriteLaunches(launch));
    };
    return (
        <Box
            data-cy="drawer-launch-item-card"
            as={Link}
            to={`/launches/${launch.flight_number.toString()}`}
            boxShadow="md"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            position="relative"
        >
            <Image
                src={
                    launch.links.flickr_images[0]?.replace(
                        "_o.jpg",
                        "_z.jpg"
                    ) ?? launch.links.mission_patch_small
                }
                alt={`${launch.mission_name} launch`}
                height={["100px", null, "150px"]}
                width="100%"
                objectFit="cover"
                objectPosition="bottom"
            />

            <Image
                position="absolute"
                top="5"
                right="5"
                src={launch.links.mission_patch_small}
                height="38px"
                objectFit="contain"
                objectPosition="bottom"
            />

            <Box p="6">
                <Flex align="center" justify="flex-end">
                    <Box
                        data-cy="drawer-launch-item-card-fav-button"
                        as={Button}
                        onClick={() => handleFavoriteLaunch(launch)}
                    >
                        <Star width="2em" color={"orange"} />
                    </Box>
                </Flex>

                <Box d="flex" alignItems="baseline">
                    {launch.launch_success ? (
                        <Badge px="2" variant="solid" variantColor="green">
                            Successful
                        </Badge>
                    ) : (
                        <Badge px="2" variant="solid" variantColor="red">
                            Failed
                        </Badge>
                    )}
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {launch.rocket.rocket_name} &bull;{" "}
                        {launch.launch_site.site_name}
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {launch.mission_name}
                </Box>
            </Box>
        </Box>
    );
}

function DrawerItemLaunchPad({ launchPad }) {
    const dispatch = useDispatch();

    const handleFavoriteLaunchPad = (launchPad) => {
        dispatch(removeFromFavoriteLaunchPads(launchPad));
    };
    return (
        <Box
            as={Link}
            to={`/launch-pads/${launchPad.site_id}`}
            boxShadow="md"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            position="relative"
        >
            <Box p="6">
                <Flex align="center" justify="flex-end">
                    <Box
                        as={Button}
                        onClick={() => handleFavoriteLaunchPad(launchPad)}
                    >
                        <Star width="2em" color={"orange"} />
                    </Box>
                </Flex>
                <Box d="flex" alignItems="baseline">
                    {launchPad.status === "active" ? (
                        <Badge px="2" variant="solid" variantColor="green">
                            Active
                        </Badge>
                    ) : (
                        <Badge px="2" variant="solid" variantColor="red">
                            Retired
                        </Badge>
                    )}
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        {launchPad.attempted_launches} attempted &bull;{" "}
                        {launchPad.successful_launches} succeeded
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {launchPad.name}
                </Box>
                <Text color="gray.500" fontSize="sm">
                    {launchPad.vehicles_launched.join(", ")}
                </Text>
            </Box>
        </Box>
    );
}

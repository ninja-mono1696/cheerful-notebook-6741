import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Newuser from "../user/Newuser";
import Existinguser from "../user/Existinguser";
import HomeVid from "./Home.mp4";

const Home = () => {
  return (
    <Box w="100%" h="100vh">
      <video
          src={HomeVid}
          muted
          autoPlay
          loop
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
          }}
        ></video>

      <Box w="100%" position="absolute" zIndex="100" top="0" textAlign="center">
        <Box w="95%" paddingLeft={5} paddingRight={5} margin="auto">
          <Navbar />

          <Box padding={10} minHeight={500} textAlign="center">
            <Box margin="auto" p={5}>
              <h1>Bird Arcade Game</h1>
              <p> Play and try to get the highest score.</p>

              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap={5}>
                <Button><Newuser/></Button>
                <Button><Existinguser/></Button>
              </Flex>
            </Box>
          </Box>

          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
export default Home;

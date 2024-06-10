import { Box, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">About Us</Text>
        <Text>We are a leading e-commerce platform for electronics, offering a wide range of products at competitive prices.</Text>
      </VStack>
    </Box>
  );
};

export default About;
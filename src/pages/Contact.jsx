import { Box, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Contact Us</Text>
        <Text>Email: support@eshop.com</Text>
        <Text>Phone: +123 456 7890</Text>
      </VStack>
    </Box>
  );
};

export default Contact;
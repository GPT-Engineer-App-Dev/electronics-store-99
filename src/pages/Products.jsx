import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: "$799",
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://via.placeholder.com/150",
    price: "$99",
  },
];

const Products = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  useEffect(() => {
    setFilteredProducts(
      sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
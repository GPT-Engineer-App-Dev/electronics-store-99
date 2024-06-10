import { Box, SimpleGrid, Image, Text, VStack, Checkbox, CheckboxGroup, Stack, Heading, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    image: "https://via.placeholder.com/150",
    price: 299,
    brand: "Brand A",
    type: "Smartphone",
  },
  {
    id: 2,
    name: "Laptop",
    image: "https://via.placeholder.com/150",
    price: 799,
    brand: "Brand B",
    type: "Laptop",
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://via.placeholder.com/150",
    price: 99,
    brand: "Brand C",
    type: "Headphones",
  },
];

const brands = ["Brand A", "Brand B", "Brand C"];
const productTypes = ["Smartphone", "Laptop", "Headphones"];

const Products = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    setFilteredProducts(
      sampleProducts.filter((product) => {
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(product.type);
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesSearchTerm && matchesBrand && matchesType && matchesPrice;
      })
    );
  }, [searchTerm, selectedBrands, selectedTypes, priceRange]);

  return (
    <Box p={4} display="flex">
      <Box width="20%" p={4} borderRight="1px solid #e2e8f0">
        <Heading size="md" mb={4}>Filter By</Heading>
        <Text mb={2}>Brand</Text>
        <CheckboxGroup onChange={setSelectedBrands}>
          <Stack>
            {brands.map((brand) => (
              <Checkbox key={brand} value={brand}>{brand}</Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
        <Text mt={4} mb={2}>Product Type</Text>
        <CheckboxGroup onChange={setSelectedTypes}>
          <Stack>
            {productTypes.map((type) => (
              <Checkbox key={type} value={type}>{type}</Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
        <Text mt={4} mb={2}>Price Range</Text>
        <Slider
          aria-label="price-range"
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          step={50}
          onChangeEnd={(val) => setPriceRange(val)}
        >
          <SliderMark value={priceRange[0]} mt="1" ml="-2.5" fontSize="sm">
            ${priceRange[0]}
          </SliderMark>
          <SliderMark value={priceRange[1]} mt="1" ml="-2.5" fontSize="sm">
            ${priceRange[1]}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </Box>
      <Box width="80%" p={4}>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <VStack p={4}>
                <Text fontWeight="bold">{product.name}</Text>
                <Text>${product.price}</Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Products;
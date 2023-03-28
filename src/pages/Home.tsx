import React, { ChangeEvent, useState } from "react";
import { Box, Button, HStack, Input } from "@chakra-ui/react";

const Home = () => {
  const [files, setFiles] = useState([]);

  const handleAddFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles([...files]);
  };

  const handleNewFile = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  return (
    <Box p={5} w="100%">
      <HStack>
        <Input w="lg" type="file" onChange={handleNewFile} />
        <Button colorScheme="blue">Enter</Button>
      </HStack>
    </Box>
  );
};

export default Home;

import { Container, VStack } from "@chakra-ui/react";
import PianoComponent from "../components/Piano";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <PianoComponent />
      </VStack>
    </Container>
  );
};

export default Index;
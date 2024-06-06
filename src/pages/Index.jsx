import { Container, Text, VStack, Heading, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [agendaItems, setAgendaItems] = useState(["Discuss project requirements", "Review design mockups", "Plan development sprints", "Set deadlines and milestones"]);

  const addItem = () => {
    const newItem = prompt("Enter new agenda item:");
    if (newItem) {
      setAgendaItems([...agendaItems, newItem]);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Meeting Agenda
        </Heading>
        <List spacing={3}>
          {agendaItems.map((item, index) => (
            <ListItem key={index}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {item}
            </ListItem>
          ))}
        </List>
        <IconButton aria-label="Add item" icon={<FaPlus />} size="lg" onClick={addItem} />
      </VStack>
    </Container>
  );
};

export default Index;

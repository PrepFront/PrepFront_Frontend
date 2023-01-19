import { Card, Col, Text } from "@nextui-org/react";

export const Cards = () => (
  <Card>
    
    <Card.Image
      src="/ServiceImage1.jpg"
      objectFit="cover"
      width="100%"
      height={300}
      alt="Card image background"
    />
    <Card.Footer css={{ position: "absolute", zIndex: 1, bottom: 5 }}>
      <Col>
      <Text  color="black">
        Discover your Ideal Industry
      </Text>
      </Col>
    </Card.Footer>
    
  </Card>
);

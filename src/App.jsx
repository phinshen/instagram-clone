import { Col, Row, Container } from "react-bootstrap";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import { createContext } from "react";
import { PROFILE_DATA } from "./data";
import ImageGrid from "./components/ImageGrid";
import Highlights from "./components/Highlights";

export const ProfileContext = createContext(null);


export default function App() {
  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{ position: "sticky", top: 0 }}
        >
          <IconButton className="bi bi-instagram" isTop />
          <IconButton className="bi bi-house-door" />
          <IconButton className="bi bi-search" />
          <IconButton className="bi bi-compass" />
          <IconButton className="bi bi-film" />
          <IconButton className="bi bi-chat" />
          <IconButton className="bi bi-heart" />
          <IconButton className="bi bi-plus-circle" />
          <IconButton isAvatar />
          <IconButton className="bi bi-list" isBottom />
        </Col>

        <Col sm={11}>
          <Container>
            <ProfileHeader />
            <Highlights />
            <ImageGrid />
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>
  )
}



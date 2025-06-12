import { Col, Row, Container } from "react-bootstrap";
import { createContext, useState } from "react";
import { PROFILE_DATA } from "./data";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import ImageGrid from "./components/ImageGrid";
import Highlights from "./components/Highlights";
import AddPostModal from "./components/AddPostModal";


export const ProfileContext = createContext(null);


export default function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


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
          <IconButton className="bi bi-plus-square" onClick={openModal} />
          <IconButton isAvatar />
          <IconButton className="bi bi-list" isBottom />
        </Col>

        <Col sm={11}>
          <Container>
            <ProfileHeader />
            <Highlights />
            <ImageGrid />
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>
  )
}



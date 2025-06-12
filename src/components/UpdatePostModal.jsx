import { Col, Button, Form, Modal, Row, Image } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../features/posts/postsSlice';

export default function AddPostModal({ show, handleClose, postId }) {
    const { image, name } = useContext(ProfileContext);
    const dispatch = useDispatch();

    const post = useSelector((state) =>
        state.posts.find((post) => post.id === postId)
    );

    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [invalidUrl, setInvalidUrl] = useState(false);

    useEffect(() => {
        if (post) {
            setImageUrl(post.image);
            setDescription(post.description);
        }
    }, [post]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (imageUrl) {
            dispatch(updatePost({ id: postId, image: imageUrl, description }));
            setImageUrl(""); // reset to blank once successfully share
            setDescription(""); // reset to blank once successfully share
            handleClose(); // close the modal
        } else {
            setInvalidUrl(true);
        }
    };

    const handleImageError = () => {
        setInvalidUrl(true);
    };

    const handleImageLoad = () => {
        setInvalidUrl(false);
    }

    return (
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>Edit post</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Row>
                        <Col sm={7} style={{ margin: '0px' }}>
                            <Image
                                src={"https://sig1.co/img-placeholder-1"}
                                alt="uploaded content"
                                onError={handleImageError}
                                onLoad={handleImageLoad}
                                style={{ width: "100%" }}
                            />
                        </Col>
                        <Col sm={5}>
                            <Image
                                src={image}
                                alt="uploader"
                                style={{ width: "32px" }}
                                roundedCircle />
                            <span className="ms-3">{name}</span>
                            <Form.Control
                                value={imageUrl}
                                onChange={(event) => setImageUrl(event.target.value)}
                                className="my-3"
                                placeholder="Add image URL"
                            />
                            {invalidUrl && (
                                <div className="text-danger">
                                    Invalid URL or failed to load image
                                </div>
                            )}
                            <Form.Control
                                className="my-3"
                                as="textarea"
                                rows={3}
                                placeholder="Write a caption"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <Button type="submit" style={{ width: "100%" }}>
                                Share
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Form>
        </Modal>
    )
}
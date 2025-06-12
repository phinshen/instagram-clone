import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { useState } from 'react';
import { deletePost } from '../features/posts/postsSlice';
import UpdatePostModal from "./UpdatePostModal";


export default function ImageGrid() {
    const posts = useSelector((state) => state.posts);
    const [show, setShow] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const dispatch = useDispatch();

    const handleClose = () => {
        setCurrentPost(null);
        setShow(false);
    }

    const handleShow = (post) => {
        setCurrentPost(post);
        setShow(true);
    }

    const renderImages = () => {
        return posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
                <Image src={post.image} fluid />
                <Button onClick={() => handleShow(post)} variant='outline-primary'>
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant='outline-danger' onClick={() => handleDelete(post.id)}>
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        ));
    };

    const handleDelete = (postId) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            dispatch(deletePost(postId));
        }
    };

    return (
        <>
            <Row>{renderImages()}</Row>;
            {currentPost && (
                <UpdatePostModal
                    show={show}
                    handleClose={handleClose}
                    postId={currentPost.id}
                />
            )}
        </>
    )
}

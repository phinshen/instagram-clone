import { Button } from 'react-bootstrap';

export default function IconButton({ isTop, isBottom, className }) {
    let margin = "light";

    if (isTop) {
        margin = "light my-4"
    } else if (isBottom) {
        margin = "light mt-auto mb-3"
    }

    return (
        <Button variant={margin} style={{ marginBottom: "7px" }}>
            <i className={className} style={{ fontSize: "24px" }}></i>
        </Button>
    );
}
import { Button, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { ProfileContext } from '../App';

export default function IconButton({ isTop, isBottom, className, isAvatar }) {
    const profile = useContext(ProfileContext);
    let margin = "light";

    if (isTop) {
        margin = "light my-4"
    } else if (isBottom) {
        margin = "light mt-auto mb-3"
    }

    return (
        <Button variant={margin} style={{ marginBottom: "7px" }}>
            {isAvatar ? (
                <Image
                    src={profile.image}
                    alt={profile.name}
                    roundedCircle
                    style={{ width: 30, height: 30 }}
                />
            ) : (
                <i className={className} style={{ fontSize: "24px" }}></i>
            )}
        </Button>
    );
}
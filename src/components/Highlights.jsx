import { Col, Row, Image } from 'react-bootstrap';

// creating array for highlights section
const highlights = [
    { title: 'Meet-ups', image: 'https://picsum.photos/seed/meetups/100' },
    { title: 'Reviews', image: 'https://picsum.photos/seed/reviews/100' },
    { title: 'Shoutouts', image: 'https://picsum.photos/seed/shoutouts/100' },
    { title: 'Hiring', image: 'https://picsum.photos/seed/hiring/100' },
    { title: 'Events', image: 'https://picsum.photos/seed/events/100' },
    { title: 'FAQs', image: 'https://picsum.photos/seed/faqs/100' },
    { title: 'Mentors', image: 'https://picsum.photos/seed/mentors/100' },
]

export default function Highlights() {
    return (
        <Row className="text-center mb-3 justify-content-center">
            {highlights.map((item, index) => (
                <Col className="mb-3" key={index}>
                    <Image
                        src={item.image}
                        roundedCircle
                        style={{ height: '70px', width: '70px', border: '2px solid lightgrey', padding: '1px' }}
                    />
                    <p className="mt-1" style={{ fontSize: '14px' }}>{item.title}</p>
                </Col>
            ))}

        </Row>

    )
}
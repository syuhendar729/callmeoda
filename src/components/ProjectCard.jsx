import { Button, Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function ProjectCard({ data }) {
    const navigate = useNavigate()

    const handleDetailClick = () => {
        navigate(`/projects/${data.slug}`)
    }

    return (
        <>
            {/* Card */}
            <Card className="card-gruvbox comic-neue-regular" style={{ width: '20rem' }}>
                <Card.Img
                    variant="top"
                    src={data.image}
                    className="card-gruvbox-img"
                    style={{ cursor: 'pointer' }}
                    onClick={handleDetailClick}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="card-gruvbox-title mb-3">{data.title}</Card.Title>
                    <Card.Text className="card-gruvbox-text flex-grow-1">{data.description}</Card.Text>
                    <Container className="d-flex flex-column mt-3 p-0">
                        <Button
                            onClick={handleDetailClick}
                            className="card-gruvbox-btn w-100"
                        >
                            View Details
                        </Button>
                    </Container>
                </Card.Body>
            </Card>

        </>
    )
}

export default ProjectCard

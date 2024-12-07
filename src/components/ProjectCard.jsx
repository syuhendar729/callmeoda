import React, { useState } from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'

function ProjectCard({
    title,
    description,
    image,
    linkProject,
    linkGithub,
    role,
    techStack,
    features,
    realaseDate,
}) {
    const [show, setShow] = useState(false)

    // Handle modal visibility
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    if (role == null) role = 'No Data'
    if (realaseDate == null) realaseDate = 'No Data'
    if (techStack == null) techStack = ['No Data']
    if (features == null) features = ['No Data', 'No Data']
    console.log(techStack)

    return (
        <>
            {/* Card */}
            <Card className="bg-dark text-light" style={{ width: '20rem' }}>
                <Card.Img
                    variant="top"
                    src={image}
                    className="project-card-img"
                    onClick={handleShow} // Open modal on click
                    style={{ cursor: 'pointer' }} // Add pointer cursor for clarity
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Container className="d-flex flex-column">
                        <Button
                            variant="primary"
                            onClick={handleShow}
                            className="m-auto"
                            rel="noopener noreferrer"
                        >
                            Detail
                        </Button>
                    </Container>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal
                show={show}
                onHide={handleClose}
                centered
                className="comic-neue-regular"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Gambar */}
                    <img
                        src={image}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '5px',
                            marginBottom: '15px',
                        }}
                    />

                    {/* Detail Proyek */}
                    <h5>Description</h5>
                    <p>{description}</p>

                    <h5>Role</h5>
                    <p>{role}</p>

                    <h5>Technology & Frameworks</h5>
                    <p>{techStack}</p>

                    <h5>Features</h5>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <h5>Realase Date</h5>
                    <p>{realaseDate}</p>

                    <h5>Github Link</h5>
                    <p>{linkGithub}</p>

                    <h5>App Link</h5>
                    <p>
                        {linkProject != null
                            ? linkProject
                            : 'App not yet publishing!'}
                    </p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard

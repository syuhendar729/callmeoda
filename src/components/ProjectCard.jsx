import React, { useState } from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'

function ProjectCard({ title, description, image, linkProject, linkGithub }) {
    const [show, setShow] = useState(false)

    // Handle modal visibility
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            {/* Card */}
            <Card className="bg-dark text-light" style={{ width: '18rem' }}>
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
                    <Container className="me-2 ms-4">
                        <Button
                            variant="primary"
                            href={linkProject}
                            className="m-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Project
                        </Button>
                        <Button
                            variant="success"
                            href={linkGithub}
                            className="m-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </Button>
                    </Container>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={image}
                        alt={title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '5px',
                        }}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectCard

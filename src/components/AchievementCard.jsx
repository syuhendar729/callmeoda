import React, { useState } from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'

function AchievementCard({ title, description, image, urlCredential }) {
    const [show, setShow] = useState(false)

    // Handle modal visibility
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Card style={{ width: '18rem' }} className="bg-dark text-light">
                <Card.Img
                    variant="top"
                    src={image}
                    onClick={handleShow}
                    className="project-card-img"
                    style={{ cursor: 'pointer' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Container className="d-flex flex-column">
                        <Button
                            variant="warning"
                            href={urlCredential}
                            className="mt-auto"
                            target="_blank"
                        >
                            Credential
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

export default AchievementCard

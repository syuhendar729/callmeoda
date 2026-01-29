import React, { useState } from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'

function AchievementCard({ title, description, image, urlCredential }) {
    const [show, setShow] = useState(false)

    // Handle modal visibility
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Card className="card-gruvbox comic-neue-regular" style={{ width: '20rem' }}>
                <Card.Img
                    variant="top"
                    src={image}
                    onClick={handleShow}
                    className="card-gruvbox-img"
                    style={{ cursor: 'pointer' }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="card-gruvbox-title mb-3">{title}</Card.Title>
                    <Card.Text className="card-gruvbox-text flex-grow-1">{description}</Card.Text>
                    <Container className="d-flex flex-column mt-3 p-0">
                        <Button
                            href={urlCredential}
                            className="card-gruvbox-btn w-100"
                            target="_blank"
                            disabled={!urlCredential}
                        >
                            {urlCredential ? 'View Credential' : 'No Credential'}
                        </Button>
                    </Container>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered className="modal-gruvbox">
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
                            borderRadius: '8px',
                        }}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AchievementCard

import { Container, Form, Button } from 'react-bootstrap'

function ContactPage() {
    return (
        <Container
            className="d-flex flex-column align-items-center mt-5 comic-neue-regular"
            style={{ minHeight: '100vh' }}
        >
            <h1 className="mb-3">Contact</h1>
            <Form style={{ width: '100%', maxWidth: '600px' }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Message"
                        as="textarea"
                    />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ContactPage

import { Container, Form, Button } from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

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

                <Button variant="success" type="submit" disabled>
                    Submit
                </Button>
            </Form>

            {/* Social Media Icons */}
            <div className="d-flex justify-content-center align-items-center mt-4">
                {/* GitHub */}
                <a
                    href="https://github.com/syuhendar729"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#333',
                        margin: '0 15px',
                        fontSize: '1.5rem',
                    }}
                >
                    <FaGithub />
                </a>
                {/* Instagram */}
                <a
                    href="https://instagram.com/callmeoda"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#E4405F',
                        margin: '0 15px',
                        fontSize: '1.5rem',
                    }}
                >
                    <FaInstagram />
                </a>
                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/syuhendar729"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#0A66C2',
                        margin: '0 15px',
                        fontSize: '1.5rem',
                    }}
                >
                    <FaLinkedin />
                </a>
                {/* Email */}
                <a
                    href="mailto:rantisi729@gmail.com"
                    style={{
                        color: '#BB001B',
                        margin: '0 15px',
                        fontSize: '1.5rem',
                    }}
                >
                    <FaEnvelope />
                </a>
            </div>
        </Container>
    )
}

export default ContactPage

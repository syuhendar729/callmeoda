import { Container, Row, Col } from 'react-bootstrap'
import AchievementCard from '../components/AchievementCard'
import { achievement } from '../data/data.json'

function AchievementPage() {
    console.log(achievement)
    return (
        <Container className="d-flex flex-column align-items-center comic-neue-regular mt-5">
            <h2 className="text-center mb-4">My Achievement</h2>
            <Row>
                {achievement.map((ach, index) => (
                    <Col
                        key={index}
                        sm={12}
                        md={6}
                        lg={4}
                        className="d-flex align-items-stretch mb-4 ps-5"
                    >
                        <AchievementCard
                            title={ach.title}
                            description={ach.description}
                            image={ach.image}
                            urlCredential={ach.urlCredential}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default AchievementPage

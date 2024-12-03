import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/data.json'

function ProjectsPage() {
    console.log(projects)
    return (
        <Container className="d-flex flex-column align-items-center comic-neue-regular mt-5">
            <h2 className="text-center mb-4">My Projects</h2>
            <Row>
                {projects.projects.map((project, index) => (
                    <Col
                        key={index}
                        sm={12}
                        md={6}
                        lg={4}
                        className="d-flex align-items-stretch mb-4 ps-5"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            linkProject={project.linkProject}
                            linkGithub={project.linkGithub}
                            role={project.role}
                            techStack={project.techStack}
                            features={project.features}
                            realaseDate={project.realaseDate}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProjectsPage

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllBlog } from "../utils/getPosts";

function BlogPage() {
    const posts = getAllBlog();

    return (
        <Container
            className="d-flex flex-column align-items-center mt-5 comic-neue-regular"
            style={{ minHeight: "100vh" }}
        >
            {/* Header */}
            <h1 className="mb-2">My Blog</h1>
            <p className="text-muted mb-5 text-center" style={{ maxWidth: 600 }}>
                Blog ini dibuat berdasarkan dokumentasi kegiatan gua sehari-hari. Bertujuan untuk mengingat kembali apa yang telah gua lakukan agar ketika membutuhkan sesuatu yang sama tidak harus mencarinya lagi. Berbagai konten di dalam sini gua usahakan tidak hanya membahas tentang teknologi saja, melainkan gua juga akan berbagi pengalaman dalam belajar sampai gua bisa berada di titik ini. 
            <br/> <br/>
                Gua tidak menyarankan teman-teman yang melihat situs ini untuk mentah-mentah mempercayai isinya dikarenakan semua isi di sini berdasarkan hasil dari analisis gua saja dan pastinya tidak luput dari kesalahan. Dan harapannya teman-teman bisa memberikan saran serta komentar lewat sosial media agar gua bisa mengevaluasi perkembangan gua dalam menulis disini.
            </p>

            {/* Blog List */}
            <Row className="w-100 justify-content-center">
                {posts.map((post) => (
                    <Col
                        key={post.slug}
                        xs={12}
                        md={10}
                        lg={8}
                        className="mb-4"
                    >
                        <Card className="shadow-sm border-0">
                            <Card.Body>
                                <Card.Title className="mb-2">
                                    {post.title}
                                </Card.Title>

                                {post.date && (
                                    <Card.Subtitle className="mb-3 text-muted">
                                        {post.date}
                                    </Card.Subtitle>
                                )}

                                <Card.Text>
                                    {post.excerpt}
                                </Card.Text>

                                <Link to={`/blog/${post.slug}`}>
                                    <Button variant="dark">
                                        Baca selengkapnya →
                                    </Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BlogPage;

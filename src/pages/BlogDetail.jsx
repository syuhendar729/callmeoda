import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { getAllPosts } from "../utils/getPosts";

export default function BlogDetail() {
    const { slug } = useParams();
    const post = getAllPosts().find((p) => p.slug === slug);

    if (!post) {
        return (
            <Container className="mt-5 text-center">
                <p>Artikel tidak ditemukan 😢</p>
                <Link to="/blog">← Kembali ke Blog</Link>
            </Container>
        );
    }

    return (
        <Container
            className="comic-neue-regular mt-5"
            style={{ maxWidth: "800px", minHeight: "100vh" }}
        >

            {/* Header */}
            <div className="mb-4 text-center">
                <h1 className="mb-2">{post.title}</h1>
                <small className="text-muted">{post.date}</small>
            </div>

            <div className="mt-5 mb-3">
                <Link to="/blog">← Kembali ke List Blog</Link>
            </div>

            {/* Content */}
            <div className="blog-content pb-5">
                <ReactMarkdown>
                    {post.content}
                </ReactMarkdown>
            </div>
        </Container>
    );
}

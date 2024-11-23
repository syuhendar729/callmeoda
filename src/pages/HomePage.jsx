import React from 'react'
import { Container, Image } from 'react-bootstrap'

function HomePage() {
    return (
        <Container
            className="d-flex flex-column align-items-center text-center mt-5 comic-neue-regular"
            style={{ minHeight: '100vh' }}
        >
            <Image
                src="/mypp.png"
                roundedCircle
                width={200}
                height={200}
                alt="Profile"
                className="mb-4"
            />

            <h1 className="mb-3">Syuhada Rantisi</h1>

            <h3>Only Student</h3>
            <p className="custom-font-20">
                I am undergraduate student majoring in Informatics Engineering
                at the Sumatra Institute of Technology and a Learner at the
                Apple Developer Academy @IL. My experience is a Back-End
                Developer for Goncengan, Unity Game Developer for Unsummon, and
                as an iOS Developer at the Apple Developer Academy. I have
                expertise in Nodejs, Unity Engine, SwiftUI, Firebase, Neovim,
                and operate the Linux Operating System.
            </p>
        </Container>
    )
}

export default HomePage

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import HomePage from './pages/HomePage'
import AchievementPage from './pages/AchievementPage'
import ProjectPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
    return (
        <div className="background-web">
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/achievement" element={<AchievementPage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

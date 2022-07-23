import { Routes, Route } from 'react-router-dom';
import Courses from '../Pages/Courses';
import Certification from '../Pages/Certification';
import Training from '../Pages/Training';
import Learning from '../Pages/Learning';
import RemoteWork from '../Pages/RemoteWork';
import Home from '../Pages/Home';
import Feedback from '../Pages/Feedback';
import Tools from '../Pages/Tools';
import Faq from '../Pages/Faq';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/training" element={<Training />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/remote-work" element={<RemoteWork />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AllRoutes;
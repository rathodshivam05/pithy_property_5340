import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react'
import '../Styles/Home.css';
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9SiNial833xcEha3llep6uFZFAJoJMMyvnpzMY96VPNDggtH

const Home = () => {
    return (
        <>
            <div className="container d-flex p-5 justify-content-between">
                <div className='pl-5 child'>
                    <h2 className='heading'>Learn the skills of the future</h2>
                    <p id="para1"> Accelerate your career or business with an online digital skills course in everything from marketing to coding and beyond. </p>
                    <button type="button" className="btn btn-primary btn-lg mt-5">Find your course</button>
                </div>
                <div className='w-100 h-100'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9SiNial833xcEha3llep6uFZFAJoJMMyvnpzMY96VPNDggtH" alt="" width="80%" height='293px' />
                </div>
            </div>

            <div className="container-fluid mt-4 color pb-5">
                <div className="container">
                    <p className="pt-4">We provide courses along with leading institutions and companies</p>
                    <div className='d-flex gap-4 mt-4'>
                        <span>
                            <img src="https://lh3.googleusercontent.com/jJZnt3_ZEgqPLoDXv9OMtmvHQ13ExWDcg4TeOruamOAm1MLaLGmzj1qwz4VBveo0Q_LCph1Idy558gyl5KHp5HDEbTxRdkzD5sGjDOjBhte3eqvw8A=w160" alt="" height="40" width="80" />
                        </span>
                        <span>
                            <img src="https://lh3.googleusercontent.com/Q3wBjzp1-TGEZWpdp-E6PSkc-nMEV66Jaokd4gUjyGh95KMqQyR1I7Gu1eSU7qifjLuiwVJrEmB92HPTa4Hr3e6Mh7JGk7zrQ8YmZ-1HQCWZpKHpzTU=w160" alt="" height="40" width="73.56" />
                        </span>
                        <span><img src="https://lh3.googleusercontent.com/MVTsJCD1WJjExvucPvW4GWYHnJ6YLPgQEFijPCVpSyfIM1wAgVvW-AQghsLFZLoWgnBCYbqI3wOveQ1RdOeDf_2Sgo03A7zN8Pwd6NSsu_wBuITKdiE=w160" alt="" height="40" width="45.7" /></span>
                        <span> <img src="https://lh3.googleusercontent.com/oDBNKrOW0hYPsQgbz7v2BAUCjUoPfuyBBaqUFGg-oify2xKieu2OjW_6C_6smen-YNlOf_CR8M3-VN5pOy_3r4VQ1FPdOUk8mrO58abJNS0RwN9_YYY=w160" alt="" height="40" width="80" /></span>
                        <span><img src="https://lh3.googleusercontent.com/KZYTEfg4wkORJscNEaj27bVFV83vzRB_6Kd7Fwpqnd5KipwGdqkkulHt9KPWr8oPQnHsh2zyw1tpPyKbB_HfzrG6XTeoy91EONnq9fRj6dV9p4HL_TA=w160" alt="" height="40px" width="80px" /></span>




                    </div>
                </div>
            </div>

            <div className='bg-primary container-fluid zoomBox d-flex justify-content-between '>
                <div className='zoom'>
                    <span>
                        <img src="https://lh3.googleusercontent.com/N9jW0_MdICcLbzV1L-JcfAXr5QaadNKtc8HgH-KPixv3J9XaSnjLkru3dZl0dfNYR12hEsDkQM_WMXtXqe_ohTSx96E7gmFHwzpXPubIJlfV3ybeTxks=-rw" alt="" className='img' width="28" height="19" />
                    </span>
                </div>
                <div>
                    <h3 className='webTitle'>Did you know we also have webinars?</h3>
                    <p id='para2'>Online sessions designed to help you develop skills in less than an hour. You can watch webinars live or register to take part in what is coming up.</p>
                </div>
                <h2 id='explore'>Explore our Webinars <i className="bi bi-arrow-right"></i></h2>
            </div>

            <div className='container'>
                <h3 id='head2'>Do things you never thought possible</h3>
                <p id='para3'>Discover courses in topics designed to help expand your career, business and horizons and to upgrade your skills for a new digital world.</p>
            </div>

            <div className="container mt-5 d-flex justify-content-evenly w-75">
                <div className='cards'>
                    <img src="https://lh3.googleusercontent.com/-0GVWZi0ZL7pLYB8XEJRfDrSC2dI6gT8RvubBrpw2BrIxtHkZY--Jn5FxXC4gp0s0fTJa4aV59o1F29qXNv_HBxcwW7zyyiDSMegNwBOEcgS_KU27Fiw=w64" height="64" width="64" alt="" />
                    <h2 className='courseHeading'>Digital Marketing</h2>
                    <p>Get certified free of charge in our ‘Fundamentals of digital marketing’ course, or explore other content to help get your business online.</p>

                    <i className="bi bi-arrow-right text-primary text-end fs-4 arrow"></i>
                </div>
                <div className='cards'>
                    <img src="https://lh3.googleusercontent.com/yUtRjWMWqcVM2Z0MWD3KX1GCkqO585TTOGlDeu3yOLIqv4Zd_Ywa6Fh-YurdcjqfYS0nZrUGBI8V-24saZac4YOri5yuoApFaxJwJZ2IzWEDaWYMfA=w64" height="64" width="64" alt="" />
                    <h2 className='courseHeading'>Career Development</h2>
                    <p>Gain the skills you need to enhance your career or gain a new job.</p>

                    <i className="bi bi-arrow-right text-primary text-end fs-4 arrow"></i>
                </div>
                <div className='cards'>
                    <img src="https://lh3.googleusercontent.com/XyURkvWIqHkfiP5yHRbJOHjUYNfEbVfqP_WoHllMs8n0su4vWyB9iwGca_UaqNRfIRLcPw-smh6Ra5XWl3R9Td-PhQcrK6KwsNiF8w8i2bIz0JcHLeP-=w64" height="64" width="64" alt="" />
                    <h2 className='courseHeading'>Data</h2>
                    <p>Demand for workers with specialist data skills has more than tripled over the last five years.</p>

                    <i className="bi bi-arrow-right text-primary text-end fs-4 arrow"></i>
                </div>

            </div>

            <div className="container-fluid color mt-5 pb-4">
                <div className="container pt-5 color d-flex justify-content-evenly">
                    <span className='ml-5 pl-5'>

                        <img src="https://lh3.googleusercontent.com/DxI7wff6hMCJz5NdnBMDjV8KJlLJOhUShC4cg5ZAGUWvS-wWwqzkuM5VKeFNLZQhxR7wW_WL5RY71ShVN1-FVmofpRoXZppnuud5H0JBeLASVYFO2Fi3=w680-rw" alt="" width="325" height="37" />
                    </span>

                    <span id='para4'>
                        Since 2015, we've trained over 700,000 people, to help them find a job, grow their career or business. Across Britain, local businesses, communities and people are using Google tools and training to thrive. Discover how Google is helping the UK economy to grow.
                        <span className='mt-3 p-2 border border-primary border-2 fs-5 mb-5 text-primary d-block w-25 text-center'>Explore Now</span>
                    </span>

                </div>

            </div>
            <div className="container mt-5">
                <h1 className='h1 text-center mb-5'>FAQ's</h1>

                <Accordion defaultIndex={[0]} allowMultiple className='w-75 m-auto'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <h5 className='h5 p-4'>Who is Google Digital Garage for?</h5>

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Everyone. Gain today's most in-demand skills, whether you're growing your business, starting a career, or just want to try something new. We’ve got a range of courses and over 40 hours of learning available to help take you where you need to go. If you’re keen to come and learn, we’re keen to meet you!
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <h5 className='h5 p-4'>Who provides the courses?</h5>

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <p>Some of the courses are provided by us, and others from our partner universities or institutions.</p>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <span className='mt-5 border fs-5 d-block text-center m-auto faq' >See All FAQ's</span>
            </div>





























        </>

    )
}

export default Home

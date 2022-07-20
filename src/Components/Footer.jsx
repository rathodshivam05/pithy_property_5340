import { Select } from '@chakra-ui/react'
import '../Styles/Navbar.css';

const Footer = () => {
    return (
        <div className="container-fluid position-fixed bottom-0 end-0  mb-5">
            <div className="container d-flex justify-content-between pb-4">
                <div>
                    <img src="https://lh3.googleusercontent.com/7NabP8N3VdnHYt17iVcUvF_Hr2lFg-ayg1YnYIrvtWCtt-RtrnwVUzLZRUT3DSg3IkZHGqEte1v-_E590aB_AC0uCA-xthGO0d1YAA=-rw" width="377" height="30" alt="" />
                </div>
                <div className='d-flex'>
                    <span className="text-secondary">Privary & Terms</span>
                    <Select size="sm" border='1px' borderColor='black' width="150px" ml={5}>
                        <option value='option1'>United Kingdom</option>
                        <option value='option2'>United States</option>
                        <option value='option3'>India</option>
                        <option value='option4'>Japan</option>
                        <option value='option5'>Australia</option>
                    </Select>
                </div>
            </div>
            <hr />
            <div className="container d-flex pt-5">
                <div className='d-flex social'>
                    <p className='text-secondary'>Share</p>
                    <img src="https://lh3.googleusercontent.com/sw4rOkreSopt2DcXlOCH9HPwHm7pPgeBsO8DFqWnnVPifC4473ztUcLCT49kDnDj5c-ClaRCOQKmBvbrzqICFq7yNgcqq8-byBV0aw=-rw" height='22' width='22' alt="" />

                    <img src="https://lh3.googleusercontent.com/O73TcAUC463DfCnA87ap5gw7uWPW2R6owA8p-jcmHYJuysd2BVT_W-1PzUdxk_kbzjQ-OHuTt4W1i3N4hi_KtCkBifUtpZFPlz4R=-rw" height='22' width='22' alt="" />

                    <img src="https://lh3.googleusercontent.com/2PFoqNpZ5xu9JK1u_CRR0aiYqGb0K6cOKkzmS2Ux0rucddJgNeMwsniGFMzQWopCdNK9rBzq73N0188sAtK_UFpgUHPPgz2XyDG5=-rw" height='22' width='22' alt="" />
                </div>
            </div>
        </div>

    )
}

export default Footer

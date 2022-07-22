import { useState, useEffect } from 'react';
import '../Styles/Training.css';
import { Button, Box, Checkbox, Text } from '@chakra-ui/react';
import axios from 'axios';

function Training() {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:8080/training")
            .then((r) => setData(r.data))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="w-50 p-5">
                <h1 className="fs-1 pb-4">Free live training </h1>
                <p className="text-secondary fw-semibold lh-base pb-5">Get started and access our free live webinar training designed to help you develop new skills. What will you learn today?</p>
                <input className="search p-2 mb-5" placeholder="  Search course name or description" />
                <div className='d-flex gap-3'>

                    <Button colorScheme='blue' variant='outline'> <i className="bi bi-check-lg"></i>&nbsp;All Dates</Button>
                    <Button colorScheme='blue' variant='outline'>Next 7 days</Button>
                    <Button colorScheme='blue' variant='outline'>Next 30 days</Button>
                    <Button colorScheme='blue' variant='outline'><i className="bi bi-calendar-event"></i>&nbsp;  Pick a date</Button>
                </div>
            </div>

            <Box backgroundColor="#F7F7F7" display='flex' h='1000px' mb="70px">
                <Box ml='50px' w='250px' mt='40px' >
                    <Text mb='25px'>LOCATION</Text>
                    <Checkbox size='lg' mb='45px'>London</Checkbox>
                    <Text mb='25px'>WEBINARS FOR</Text>
                    <Checkbox size='lg' mb='10px' display='block'> Career Groth</Checkbox>
                    <Checkbox size='lg' mb='10px' display='block'> Jobseeker</Checkbox>
                    <Checkbox size='lg' mb='10px' display='block'> Small & Medium<br />Businesses</Checkbox>
                    <Checkbox size='lg' mb='40px' display='block'> Student</Checkbox>
                    <Text mb='15px' color='silver'>____________________________</Text>
                    <Text color='#1A73E8' fontSize='lg'><i className="bi bi-arrow-clockwise"></i> Reset Filters
                    </Text>
                </Box>

                <Box w='75%'>
                    <Text mt='40px' mb='25px' fontWeight='bold'>Results : {data.length}</Text>
                    <Box display='flex' flexWrap='wrap' gap='10px'>
                        {data.map((item) => {
                            return (
                                <>
                                    <Box p='15px' w='500px' h="280px" border='1px' borderColor="white" backgroundColor='white'>
                                        <Button colorScheme='green' mb='8px' color='green' size='sm' variant='outline' display='block'>{item.card_event_state}</Button>
                                        <Text className='fw-bold' fontSize='18px' display='block'>{item.card_event_title}</Text>
                                        <Text display='block' fontSize='sm'>{item.card_event_description}</Text>
                                        <Text display='block' fontSize='sm'><i className="bi bi-file-play text-warning fs-5"> </i>{item.card_event_property}</Text>
                                        <Text display='block' fontSize='sm'><i className="bi bi-person text-warning fs-5"> </i>{item.card_event_property2}</Text>
                                        <i className="bi bi-arrow-right text-primary fs-5"></i>
                                    </Box>
                                </>
                            )
                        })}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Training

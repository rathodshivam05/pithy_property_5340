import { Box, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';

const RemoteWork = () => {
    return (
        <>
            <Box textAlign='center' w='50%' m='auto' mt='80px' mb='60px'>
                <Text fontSize='38px' >Helping you work, teach and learn from anywhere </Text>
                <p fontSize='sm'>In today's environment, more employees, educators and students are working remotely. To help, we’ve gathered some tools and resources you can use to stay connected and productive.</p>
            </Box>
            <Box w='92%' m='auto' bgColor='#F7F7F7' display='flex' justifyContent='space-evenly' p='15px' border='2px solid #F7F7F7' boxShadow='lg' mb='50px'>
                <Text>WORK FROM ANYWHERE</Text>
                <Text>RUN YOUR BUSINESS FROM ANYWHERE</Text>
                <Text>TEACH FROM ANYWHERE</Text>
                <Text>LEARN FROM ANYWHERE</Text>
            </Box>

            <Box w={'92%'} m='auto' display={'flex'} mb='100px'>

                <Box w='50%' border='1px solid silver' >
                    <Box p='13px' borderBottom='1px solid silver'>
                        <Text fontSize={'42px'}>Work from anywhere</Text>
                        <Text w='83%' mb='30px'>These resources will help you and your teams to communicate and collaborate effectively, even when you’re not together in person.</Text>
                    </Box>

                    <Text p='38.5px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Start using tools for better working <ArrowForwardIcon ml='212px' w={6} h={6} /></Text>
                    <Text p='38.5px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Communicate effectively, from wherever you are <ArrowForwardIcon ml='107px' w={6} h={6} /></Text>
                    <Text p='38.5px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Collaborate with other while working remotely <ArrowForwardIcon ml='125px' w={6} h={6} /></Text>
                    <Text p='38.5px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Learn to schedule, prepare for run successful meeting <ArrowForwardIcon ml='68px' w={6} h={6} /> </Text>
                    <Text p='38.5px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>4 tips for staying productive when working from home <ArrowForwardIcon ml='60px' w={6} h={6} /></Text>
                    <Text p='38.5px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg'>6 tips for better video call when working from home <ArrowForwardIcon ml='82px' w={6} h={6} /></Text>
                </Box>
                <Box h='800px' w='655px' m='auto'
                    bgImage="url('https://lh3.googleusercontent.com/WqqOQgvDCWBKyCCvRatA2g_N3D4VXtX5BEaul65DIzymFUApKJ0yBglbnLIVLbt8Xcuhc_YKpDlZYWLmSSzfvsTdztq8kJZ2EM7Vxg=s0-rj')"
                    bgRepeat="no-repeat" bgPos={'center'}
                    bgSize='cover'>
                </Box>
            </Box >


            {/* Second box */}
            <Box w={'92%'} m='auto' mb='100px' display={'flex'}>
                <Box h='722px' w='625px' m='auto'
                    bgImage="url('https://lh3.googleusercontent.com/Bn6Qh_YH0fE7D0neX2GqODs13hV7z0sA7CVYqyhJhXmrdbBalHDQQ15UmBUOVGgz1jwWUIuCE5yFlLn8BV_QNfAndplGSSUFhMNUAw=s0-rj')"
                    bgRepeat="no-repeat" bgPos={'center'}
                    bgSize='cover'>
                </Box>
                <Box w='50%' border='1px solid silver' >
                    <Box p='20px' borderBottom='1px solid silver'>
                        <Text fontSize={'38px'}>Run your business from anywhere</Text>
                        <Text w='85%' mb='30px'>Put the right tools and practices in place to make sure your business is running smoothly, your teams are connected, and your customers stay happy.</Text>
                    </Box>

                    <Text p='35px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Work faster, work smarter with G-suite<ArrowForwardIcon ml='215px' w={6} h={6} /></Text>
                    <Text p='35px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Keep customers informed through Google My Business <ArrowForwardIcon ml='77px' w={6} h={6} /></Text>
                    <Text p='35px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>A guide to hosting virtual eventes on YouTube <ArrowForwardIcon ml='145px' w={6} h={6} /></Text>
                    <Text p='35px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Achieve a balanced and flexible workforce <ArrowForwardIcon ml='178px' w={6} h={6} /> </Text>
                    <Text p='35px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg'>3 things we're considering as we rethink live events <ArrowForwardIcon ml='100px' w={6} h={6} /></Text>
                </Box>
            </Box>

            {/* Third Box */}

            <Box w={'92%'} m='auto' mb='100px' display={'flex'}>
                <Box w='50%' border='1px solid silver' >
                    <Box p='25px' borderBottom='1px solid silver'>
                        <Text fontSize={'38px'}>Teach from anywhere</Text>
                        <Text w='85%' mb='30px'>Explore ways to keep students engaged through distance learning resources for educators.</Text>
                    </Box>

                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Explore resources for distance training<ArrowForwardIcon ml='225px' w={6} h={6} /></Text>
                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Learn to use digital tools in your lessons plan <ArrowForwardIcon ml='165px' w={6} h={6} /></Text>
                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Share information by creating an interactive presentation <ArrowForwardIcon ml='70px' w={6} h={6} /></Text>
                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Test yourself and others by creating quiz in Google Forms <ArrowForwardIcon ml='65px' w={6} h={6} /> </Text>
                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg'>Use comments in Google Docs to give feedback on work <ArrowForwardIcon ml='67px' w={6} h={6} /></Text>
                </Box>
                <Box h='700px' w='625px' m='auto'
                    bgImage="url('https://lh3.googleusercontent.com/LahFn7ylv7oBbbi80t1lb0UivE5J1bYTOune-iApM_Mio8MRLdDu0V7c5lslq62wUcYX6qTRpFHnlujlMlAxfJEOEvFBshUeBGlsPv8=s0-rj')"
                    bgRepeat="no-repeat" bgPos={'center'}
                    bgSize='cover'>
                </Box>
            </Box>

            {/* Forth box */}
            <Box w={'92%'} m='auto' mb='100px' display={'flex'}>
                <Box h='600px' w='625px' m='auto'
                    bgImage="url('https://lh3.googleusercontent.com/ugYgbdlUWcBrW2QAL5JDwVk5FLkvvex72iYsHetgkHZf7alW6QMtQi4J9f_u2hHZSingvczC1QK6rcE7SRvep0cnJ2EPLgWNVGyM7w=s0-rj')"
                    bgRepeat="no-repeat" bgPos={'center'}
                    bgSize='cover'>
                </Box>
                <Box w='50%' border='1px solid silver' >
                    <Box p='30px' borderBottom='1px solid silver'>
                        <Text fontSize={'38px'}>Learn from anywhere</Text>
                        <Text w='85%' mb='30px'>Keep learning new skills to develop personally and professionally, wherever you are.</Text>
                    </Box>

                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Start learning new skills online for free<ArrowForwardIcon ml='225px' w={6} h={6} /></Text>
                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Take bite-size business and marketting lessons <ArrowForwardIcon ml='153px' w={6} h={6} /></Text>
                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg' borderBottom='1px solid silver'>Begin coding through quick lesson on your phone <ArrowForwardIcon ml='120px' w={6} h={6} /></Text>
                    <Text p='32px' color='#1979f7' bgColor={'#F7F7F7'} fontSize='lg'>Get organized with Goodle Drive <ArrowForwardIcon ml='255px' w={6} h={6} /> </Text>
                </Box>

            </Box>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </>
    )
}

export default RemoteWork

import { Text, Center} from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Center borderTopEndRadius='50%' mt='8' py='20px' bg='purple.700' color='white'>
        <Text fontSize='15px'>Copyright &copy; 2023. All rights reserved.</Text>
      </Center>
    </>
  )
}

export default Footer
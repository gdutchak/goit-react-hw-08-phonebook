import { ArrowBackIcon} from '@chakra-ui/icons'
import { Container, ErrorMessage, LinkError } from "./Error.styled";

const Error = ()=>{
    return(
        <Container>
        <ErrorMessage>Ooops, this page was not found:(</ErrorMessage>
        <LinkError to={'/'}>
            <ArrowBackIcon/>
            Go back to home page</LinkError>
        </Container>
    )
}

export default Error;
import { useSelector, useDispatch } from 'react-redux';
import { Item, ButtonList } from './ListContacts.styled';
import { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { DeleteIcon} from '@chakra-ui/icons';
import { fetchContacts, deleteContactNumber } from 'redux/operationsContacts';

const ListContacts = () => {
    const dispatch = useDispatch()
    let contact = useSelector((state) => state.number.contacts.items);    
    const filter = useSelector((state) => state.filter.filter);
    const loading = useSelector((state) => state.number.contacts.isLoading)
    const isLogin = useSelector((state=>state.auth.isLogin))

    useEffect(() => {
        if(!isLogin){
            return
        }
     dispatch(fetchContacts())
    }, [dispatch, isLogin])

    if (filter) {
        contact = contact.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    }
    return (<ul>
        {loading && <ClipLoader />}
        {contact && contact.map(({ name, number, id }) =>
            <Item key={id}>{name}: {number}
                <ButtonList type='button' onClick={() => {
                dispatch(deleteContactNumber(id))
                Notify.warning('This number has deleted from contacts!')
                }} >
                    <DeleteIcon marginRight={2} />
                    Delete</ButtonList>
            </Item >)}
    </ul >)
}

export default ListContacts;
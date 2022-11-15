import { Label } from 'components/FormContacts/FormContact.styled';
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from 'redux/sliceFilter';
import { InputFilter } from './Filter.styled';

const Filter = () => {
    const filter = useSelector((state) => state.filter.filter)
    const dispatch = useDispatch();
    const searchContact = e => dispatch(addFilter(e.currentTarget.value))

    return (
        <>
        <Label>Find contacts by name
            <InputFilter type="text" name='filter' onInput={searchContact} value={filter} />
        </Label>
        </>
    )
}

export default Filter;
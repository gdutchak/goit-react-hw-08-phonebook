import FormContacts from '../components/FormContacts/FormContacs';
import Filter from "..//components/Filter/Filter";
import ListContacts from "../components/ListContacts/ListContacts";
import LogoutPage from './LogOut';
import { H1, SectionContacts } from 'components/Home/Home.styled';

const Contacts = ()=>{

    return(
        <SectionContacts>
        <div style={{ padding: 40 }}>
      <H1>Phonebook</H1>
      <FormContacts ></FormContacts>
      <Filter></Filter>
      <h2>Contacts</h2>
      <ListContacts ></ListContacts>
    </div >
    <LogoutPage/>
        </SectionContacts>
    )
}

export default Contacts
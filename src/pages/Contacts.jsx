import { FormContacts } from '../components/FormContacts/FormContacs';
import { Filter } from "..//components/Filter/Filter";
import { ListContacts } from "../components/ListContacts/ListContacts";
import { LogoutPage } from './LogOut';

export const Contacts = ()=>{

    return(
        <section>
        <div style={{ padding: 40 }}>
      <h1>Phonebook</h1>
      <FormContacts ></FormContacts>
      <Filter></Filter>
      <h2>Contacts</h2>
      <ListContacts ></ListContacts>
    </div >
    <LogoutPage/>
        </section>
    )
}
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={css.list}>
          {visibleContacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available</p>
      )}
    </>
  );
}

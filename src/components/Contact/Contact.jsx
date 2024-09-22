import { FaRegUser } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <FaRegUser className={css.nameIcon} />
      <p className={css.name}>{name}</p>
      <BsTelephoneOutbound className={css.phoneIcon} />
      <p className={css.phone}>{number}</p>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

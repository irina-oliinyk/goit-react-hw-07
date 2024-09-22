import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.paragraf}>Find contacts by name </p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}

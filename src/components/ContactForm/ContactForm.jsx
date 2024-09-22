import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react";

export default function ContactForm() {
  const dispatch = useDispatch();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long! (Max.50!)")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long! (Max.50!)")
      .required("Required"),
  });

  const id = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  // const handleSubmit = (values, actions) => {
  //   console.log(values);
  //   initialValues.id = nanoid();

  //   dispatch(addContact(values));
  //   actions.resetForm();
  // };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.div}>
            <label htmlFor={`${id}-name`}>Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={`${id}-name`}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.div}>
            <label htmlFor={`${id}-number`}>Number</label>
            <Field
              className={css.field}
              type="text"
              name="number"
              id={`${id}-number`}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import "./Form.scss";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      phone: Yup.string()
        .required("Required")
        .matches(/^\d{9,}$/, "Phone number must be at least 9 digits long"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(
        `Form data:\nName: ${values.fullName}\nPhone: ${values.phone}\nEmail: ${values.email}`
      );

      // Можливiсть вiдправити запит через axios пiсля введення у server.js даних iмейлу i паролю
      /*
      axios
        .post("http://localhost:5001/send-email", values)
        .then((response) => {
          alert("Form was sent!");
          resetForm();
        })
        .catch((error) => {
          alert("Error while sending.");
          console.error("Error sending email:", error);
        });
      */
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="registration-form">
      <div className="offer">
        Запишитесь <span>бесплатно</span> <br />и получите подарок
      </div>
      <div className="form-group">
        <input
          className="input-name"
          type="text"
          name="fullName"
          placeholder="Ваше имя и фамилия"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <div className="error">{formik.errors.fullName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <PhoneInput
          country={"ua"}
          value={formik.values.phone}
          onChange={(phone) => formik.setFieldValue("phone", phone)}
          inputProps={{
            minLength: 9,
          }}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Ваш email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Записаться бесплатно</button>
      <p className="warn">
        Нажимая на кнопку я соглашаюсь <br />
        <span>с политикой конфиденциальности</span>
      </p>
    </form>
  );
};

export default Form;

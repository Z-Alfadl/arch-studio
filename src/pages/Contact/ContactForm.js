import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    let data = e.target.value;
    let inputName = e.target.name;

    setFormData({ ...formData, [inputName]: data });
    if (!data) {
      setErrors({ ...errors, [inputName]: "Can't be empty" });
    } else {
      setErrors({ ...errors, [inputName]: "" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    for (let key in formData) {
        if (!formData[key]) {
            validationErrors[key] = "Can't be empty";
        }
    }
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    }; 
  return (
    <div id="form-container">
      <form className="body" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className={errors.name && "error"}
        />
        <div className="error-message">{errors.name}</div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className={errors.email && "error"}
        />
        <div className="error-message">{errors.email}</div>
        <input
          type="textarea"
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className={errors.message && "error"}
        />
        <div className="error-message">{errors.message}</div>
        <button type="submit" id="submit-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="20"
            className="right-icon"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 1l9 9-9 9M0 10h24" stroke="currentColor" />
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
};

import { useState } from "react";

function CreateComment({ onCreate }) {
 /*  const [formData, setFormData] = useState({ name, email });
  const { name, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
 */
  const handleOnSubmit = (e) => {
    e.preventDefault();
   onCreate(e.target.id,e.target.value)
   e.target.name.value=''
   e.target.email.value=''

  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add Comment</h3>
        <input
          type="text"
          placeholder="Name"
          /* onChange={onchange} */
       name="name"
        />
        <input
          type="email"
          placeholder="Email"
         /*  onChange={onChange} */
        name="email"
        />
        <button type="submit" onSubmit={handleOnSubmit}>Add Comment</button>
      </form>
    </div>
  );
}

export default CreateComment;

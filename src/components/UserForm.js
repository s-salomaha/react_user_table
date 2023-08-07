import { useForm } from "react-hook-form";

export const UserForm = ({ user, newUser = false, handleChange = null }) => {
  const { register, formState: { errors }, handleSubmit, setFocus, setValue } = useForm({
    reValidateMode: 'onSubmit'
  });

  function onSubmit(data) {
    console.log('data', data);
  }

  return (
    <form className="row" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-1">
        {user && user.id}
        <input
          type="hidden"
          {...register("id", {
            value: user ? user.id : ""
          })}
        />
      </div>
      <div className="col-2">
        <input
          className={`form-control${errors.name ? " is-invalid" : ""}`}
          placeholder="User name"
          {...register("name", {
            required: true,
            value: user ? user.name : "",
          })}
        />
      </div>
      <div className="col-3">
        <input
          type="email"
          className={`form-control${errors.email ? " is-invalid" : ""}`}
          placeholder="User email"
          {...register("email", {
            required: true,
            value: user ? user.email : ""
          })}
        />
      </div>
      <div className="col-2">
        <input
          type="date"
          className={`form-control${errors.birthdate ? " is-invalid" : ""}`}
          placeholder="Birthdate"
          {...register("birthdate", {
            required: true,
            value: user ? user.birthdate : ""
          })}
        />
      </div>
      <div className="col-2">
        <input
          className={`form-control${errors.phone ? " is-invalid" : ""}`}
          placeholder="Phone number"
          {...register("phone", {
            required: true,
            value: user ? user.phone : "",
            minLength: 5
          })}
        />
      </div>
      <div className="col-2">
        {newUser
          ? <button type="submit" className="btn btn-primary">Add new user</button>
          : (
              <>
                <button type="submit" className="btn btn-success">Save</button>
                <button type="submit" className="btn btn-danger ms-1">Delete</button>
              </>
            )
        }
      </div>
    </form>
  )
};

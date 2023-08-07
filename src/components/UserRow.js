export const UserRow = ({ user, newUser = false }) => {
  return (
    <div className="row">
      <div className="col-1">
        {user && user.id}
      </div>
      <div className="col-2">
        <input type="text" className="form-control" value={user && user.name} placeholder="User name"/>
      </div>
      <div className="col-3">
        <input type="email" className="form-control" value={user && user.email} placeholder="User email"/>
      </div>
      <div className="col-2">
        <input type="date" className="form-control" value={user && user.birthdate} placeholder="Birthdate"/>
      </div>
      <div className="col-2">
        <input type="text" className="form-control" value={user && user.phone} placeholder="Phone number"/>
      </div>
      <div className="col-2">
        {newUser
          ? <button type="button" className="btn btn-primary">Add new user</button>
          : (
              <>
                <button type="button" className="btn btn-success">Save</button>
                <button type="button" className="btn btn-danger ms-1">Delete</button>
              </>
            )
        }
      </div>
    </div>
  )
};

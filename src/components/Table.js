export const Table = ({ users }) => {
  return (
    <>
      <div className="table-responsive border secondary-subtle rounded-1 p-3">
        <table className="table table-striped align-middle mb-0">
          <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">User name</th>
            <th scope="col">User email</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Phone number</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>
                  <input type="text" className="form-control" value={user.name} placeholder="User name"/>
                </td>
                <td>
                  <input type="email" className="form-control" value={user.email} placeholder="User email"/>
                </td>
                <td>
                  <input type="date" className="form-control" value={user.birthdate} placeholder="Birthdate"/>
                </td>
                <td>
                  <input type="text" className="form-control" value={user.phone} placeholder="Phone number"/>
                </td>
                <td>
                  <button type="button" className="btn btn-success">Save</button>
                  <button type="button" className="btn btn-danger ms-1">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="btn btn-primary mt-4">Add new user</button>
    </>
  )
};

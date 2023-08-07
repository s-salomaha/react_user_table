import { UserForm } from "./UserForm";

export const UsersTable = ({ users }) => {
  return (
    <div className="table-responsive border secondary-subtle rounded-1 p-3">
      <table className="table table-striped align-middle mb-0">
        <thead>
          <tr>
            <th>
              <div className="row">
                <div className="col-1">id</div>
                <div className="col-2">User name</div>
                <div className="col-3">User email</div>
                <div className="col-2">Birthdate</div>
                <div className="col-2">Phone number</div>
                <div className="col-2">Action</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <UserForm user={user} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

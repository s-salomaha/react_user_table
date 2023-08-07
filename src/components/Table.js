export const Table = () => (
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
        <tr>
          <th scope="row">01</th>
          <td>
            <input type="text" className="form-control" value={'Otto'} placeholder="User name" />
          </td>
          <td>
            <input type="email" className="form-control" value={'otto@gmail.com'} placeholder="User email" />
          </td>
          <td>
            <input type="date" className="form-control" value={'01.07.2003'} placeholder="Birthdate" />
          </td>
          <td>
            <input type="text" className="form-control" value={'+1 999 000 00 01'} placeholder="Phone number" />
          </td>
          <td>
            <button type="button" className="btn btn-success">Save</button>
            <button type="button" className="btn btn-danger ms-1">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">02</th>
          <td>
            <input type="text" className="form-control" value={'Jacob'} placeholder="Username" />
          </td>
          <td>
            <input type="email" className="form-control" value={'thornton@gmail.com'} placeholder="User email" />
          </td>
          <td>
            <input type="date" className="form-control" value={'01.07.2003'} placeholder="Birthdate" />
          </td>
          <td>
            <input type="text" className="form-control" value={'+1 999 000 00 02'} placeholder="Phone number" />
          </td>
          <td>
            <button type="button" className="btn btn-success">Save</button>
            <button type="button" className="btn btn-danger ms-1">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">03</th>
          <td>
            <input type="text" className="form-control" value={'Larry the Bird'} placeholder="Username" />
          </td>
          <td>
            <input type="email" className="form-control" value={'twitter@gmail.com'} placeholder="User email" />
          </td>
          <td>
            <input type="date" className="form-control" value={'01.07.2003'} placeholder="Birthdate" />
          </td>
          <td>
            <input type="text" className="form-control" value={'+1 999 000 00 03'} placeholder="Phone number" />
          </td>
          <td>
            <button type="button" className="btn btn-success">Save</button>
            <button type="button" className="btn btn-danger ms-1">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">04</th>
          <td>
            <input type="text" className="form-control" value={''} placeholder="Username" />
          </td>
          <td>
            <input type="email" className="form-control" value={''} placeholder="User email" />
          </td>
          <td>
            <input type="date" className="form-control" value={''} placeholder="Birthdate" />
          </td>
          <td>
            <input type="text" className="form-control" value={''} placeholder="Phone number" />
          </td>
          <td>
            <button type="button" className="btn btn-success">Save</button>
            <button type="button" className="btn btn-danger ms-1">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
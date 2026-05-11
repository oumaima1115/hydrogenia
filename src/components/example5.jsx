export const example5 = () => {
  return <h1>Hello World, I am example5</h1>;
};




// function table , form

// Arrow Function + export directly
// This is a named export, not default
// To use it:
// import { example5 } from "./example5";















export const Table = () => {
  return (
    <div className="container mt-4">

      <h2>Users Table</h2>

      <table className="table table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Developer</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Sarah</td>
            <td>Designer</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Mike</td>
            <td>Backend Dev</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
};


export const Form = () => {
    return (
        <div className="container mt-4">

            <h2>Login Form</h2>

            <form>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button className="btn btn-primary">Submit</button>

            </form>

        </div>
    );
};











// return (
//   <div>
//     <img src="/profile.png" className="my-profile" alt="myprofile" />
//     <p>
//       {firstName} {lastName}
//     </p>
//   </div>
// );

// // or this way
// return (
//   <>
//     <img src="/profile.png" className="my-profile" alt="my profile" />
//     <p>
//       {firstName} {lastName}
//     </p>
//   </>
// );

// // this is another way
// return (
//   <React.Fragment>
//     <img src="/profile.png" className="my-profile" alt="my profile" />
//     <p>
//       {firstName} {lastName}
//     </p>
//   </React.Fragment>
// );




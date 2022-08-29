export const Register = () => {
  return (
    <>
      <fieldset>
        <form>
          <label>
            <span> Name</span>
            <input type="text"></input>
          </label>

          <label>
            <span> Email</span>
            <input type="text"></input>
          </label>

          <label>
            <span> Password</span>
            <input type="text"></input>
          </label>

          <button type="submit">Login</button>
        </form>
      </fieldset>
    </>
  );
};

// https://connections-api.herokuapp.com/users/signup

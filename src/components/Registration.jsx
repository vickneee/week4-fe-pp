function Registration() {
  return (
    <div className="hero">
      <form className="form card">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <button className="register-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;

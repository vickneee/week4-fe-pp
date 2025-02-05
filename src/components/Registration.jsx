function Registration() {
  return (
    <div className="hero">
      <form className="form card">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder="Password" />
        </div>
        <button className="register-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;

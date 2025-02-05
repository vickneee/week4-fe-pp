function Registration() {
    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Registration;
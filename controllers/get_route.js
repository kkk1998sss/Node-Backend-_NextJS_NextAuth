const pool = require('../database/database');

const getdata = (req, res) => {
  pool.query("SELECT * FROM user_details", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};
  

const authenticate = (req, res) => {
  const { email, password } = req.body;

  // Perform authentication logic against your database (similar to your existing logic)
  try {
    pool.query(
      "SELECT * FROM user_details WHERE email = $1",
      [email],
      (error, result) => {
        if (error) {
          console.error("Error authenticating user:", error);
          return res.status(500).json({ error: "Internal server error" });
        }

        const user = result.rows[0];

        if (user && (password, user.password)) {
          // Return the authenticated user
          return res.status(200).json({ user });
        } else {
          return res.status(401).json({ error: "Invalid credentials" });
        }
      }
    );
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



module.exports = {
  getdata,
  authenticate,
};

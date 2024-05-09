const pool = require("../database/database");
const signup = (req, res) => {
  const { name, email, password } = req.body;

  // Perform user registration logic and insert into the database
  try {
    // Check if the user already exists (for example, by querying the database)
    pool.query(
      "SELECT * FROM user_details WHERE email = $1",
      [email],
      (error, result) => {
        if (error) {
          console.error("Error checking existing user:", error);
          return res.status(500).json({ error: "Internal server error" });
        }

        const existingUser = result.rows[0];

        if (existingUser) {
          return res.status(400).json({ error: "User already exists" });
        } else {
          // If the user doesn't exist, proceed with user creation
          // You should hash the password before storing it in the database (using bcrypt or a similar library)
          // For example: const hashedPassword = bcrypt.hashSync(password, saltRounds);

          // Insert the new user into the database
          pool.query(
            "INSERT INTO user_details (name, email, password) VALUES ($1, $2, $3)",
            [name, email, password],
            (error) => {
              if (error) {
                console.error("Error creating user:", error);
                return res.status(500).json({ error: "Failed to create user" });
              }

              return res
                .status(201)
                .json({ message: "User created successfully" });
            }
          );
        }
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const createdata = (req, res) => {
  const { name, email, password } = req.body;
  pool.query(
    "INSERT INTO user_details (name, email, password) VALUES ($1, $2, $3)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }

      res.status(200).json({
        msg: "Data Inserted successfully",
        data: result.rows[0],
      });
    }
  );
};

module.exports = {
  createdata,
  signup,
};

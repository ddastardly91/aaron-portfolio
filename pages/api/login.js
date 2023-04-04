import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("portfolio");

  switch (req.method) {
    case "POST":
      let user = await db
        .collection("users")
        .findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword)
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials. password" });

      const token = JWT.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "30m",
      });

      res.status(200).json({
        success: true,
        data: { name: user.name, email: user.email, token: token },
      });
      break;
  }
}

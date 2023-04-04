import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("portfolio");

  switch (req.method) {
    case "POST":
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash("aaronportfolio070891", salt);

      try {
        const user = await db.collection("users").insertOne({
          name: "Aaron",
          email: "alatham7891@gmail.com",
          password: hashPassword,
        });

        res.status(200).json({ success: true, data: user._id });
        break;
      } catch (err) {
        res.status(400).json({ success: false, message: err.message });
        break;
      }
  }
}

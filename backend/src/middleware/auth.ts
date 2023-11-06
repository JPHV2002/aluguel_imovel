import * as jwt from "jsonwebtoken";

export function authenticateJWT(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Token não fornecido" });

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.user = user;
    next();
  });
}

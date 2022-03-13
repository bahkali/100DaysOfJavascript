import jwt from "jsonwebtoken";

export const tokenVerification = (req: any, res: any, next: any) => {
  const token = req.get("Authorization").split(" ")[1];
  let decodedToken: any;
  try {
    decodedToken = jwt.verify(token, "supersecret");
  } catch (error) {
    throw error;
  }

  // invalid token handeler
  if (!decodedToken) {
    const err = new Error("Not authenticated.");
    throw err;
  }

  // Valid token
  req.userId = decodedToken.userId;
  next();
};

import jwt from "jsonwebtoken";

const auth = () => {
  return async function (req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const bearer = "Bearer ";

      if (!authHeader || !authHeader.startsWith(bearer)) {
        throw new createHttpError(401, "Access denied. No credentials sent!");
      }

      const token = authHeader.replace(bearer, "");
      const secretKey = "secret-key";

      const decoded = jwt.verify(token, secretKey);
      // Check user existion
    } catch (err) {
      err.status = 401;
      next(err);
    }
  };
};

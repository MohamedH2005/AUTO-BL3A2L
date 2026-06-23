import path from "path";
import dotenv from "dotenv";
dotenv.config({
    path: path.join(process.cwd(), "Ts/src/config/.env.dev"),
});
function getEnv(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(` Missing environment variable: ${key}`);
    }
    return value;
}
console.log("ENV SALT:", process.env.SALT);
export const config = {
    PORT: Number(getEnv("PORT")),
    DB_URI: getEnv("DB_URI"),
    NODE_ENV: getEnv("NODE_ENV"),
    SALT: Number(getEnv("SALT")),
    ENC: getEnv("Encryption_Secret_Key"),
};

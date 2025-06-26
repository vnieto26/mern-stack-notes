
import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-rate-limit");
        if (!success) {
            return res.status(429).json({ message: "Demasiados intentos, intente de nuevo en unos minutos" });
        }
        next();
        
    } catch (error) {
        console.log("Error al limitar la tasa", error);
        res.status(500).json({ message: error.message });
    }
};

export default rateLimiter;

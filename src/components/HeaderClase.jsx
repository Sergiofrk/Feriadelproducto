import { motion } from "framer-motion";

export default function HeaderClase({ tituloTema, horario }) {
    return (
        <motion.header
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                background: "linear-gradient(135deg, #5B2C83, #7B3FA1, #F28C28)",
                color: "white",
                padding: "40px 25px",
                borderRadius: "0 0 25px 25px",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(91, 44, 131, 0.25)",
                marginBottom: "25px"
            }}
        >
            <div
                style={{
                    maxWidth: "850px",
                    margin: "0 auto"
                }}
            >
                <span
                    style={{
                        display: "inline-block",
                        background: "rgba(255,255,255,0.18)",
                        padding: "7px 16px",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        marginBottom: "15px"
                    }}
                >
                    📚 MERCADOTECNIA • 4TO DIVERSIFICADO
                </span>

                <h1
                    style={{
                        margin: "0",
                        fontSize: "2.5rem",
                        fontWeight: "800"
                    }}
                >
                    {tituloTema}
                </h1>

                <p
                    style={{
                        margin: "12px 0 0",
                        fontSize: "1rem",
                        opacity: 0.9
                    }}
                >
                    ⏰ {horario}
                </p>

                <p
                    style={{
                        maxWidth: "600px",
                        margin: "18px auto 0",
                        lineHeight: "1.5",
                        fontSize: "1.05rem"
                    }}
                >
                    De una idea a una empresa: construyamos juntos nuestra
                    propuesta para la Feria del Producto.
                </p>
            </div>
        </motion.header>
    );
}
import { motion } from "framer-motion";

export default function ObjetivosCard({ indicador, competencia }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{
                scale: 1.02,
                y: -5
            }}
            whileTap={{
                scale: 0.98
            }}
            style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "25px",
                marginBottom: "30px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                border: "1px solid #E5D9EC",
                cursor: "pointer"
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px"
                }}
            >
                <div
                    style={{
                        background: "#F28C28",
                        width: "45px",
                        height: "45px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px"
                    }}
                >
                    🎯
                </div>

                <div>
                    <h2
                        style={{
                            margin: 0,
                            color: "#5B2C83",
                            fontSize: "1.5rem"
                        }}
                    >
                        Metas de la sesión
                    </h2>

                    <p
                        style={{
                            margin: "3px 0 0",
                            color: "#777",
                            fontSize: "0.9rem"
                        }}
                    >
                        Lo que aprenderemos durante esta etapa
                    </p>
                </div>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "18px"
                }}
            >
                <div
                    style={{
                        background: "#F7F0FB",
                        padding: "18px",
                        borderRadius: "14px",
                        borderLeft: "4px solid #7B3FA1"
                    }}
                >
                    <h3
                        style={{
                            color: "#5B2C83",
                            margin: "0 0 8px"
                        }}
                    >
                        Competencia
                    </h3>

                    <p
                        style={{
                            margin: 0,
                            color: "#444",
                            lineHeight: "1.5"
                        }}
                    >
                        {competencia}
                    </p>
                </div>

                <div
                    style={{
                        background: "#FFF5E8",
                        padding: "18px",
                        borderRadius: "14px",
                        borderLeft: "4px solid #F28C28"
                    }}
                >
                    <h3
                        style={{
                            color: "#D66F0A",
                            margin: "0 0 8px"
                        }}
                    >
                        Indicador de logro
                    </h3>

                    <p
                        style={{
                            margin: 0,
                            color: "#444",
                            lineHeight: "1.5"
                        }}
                    >
                        {indicador}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
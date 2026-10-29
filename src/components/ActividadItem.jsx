import { useState } from "react";
import { motion } from "framer-motion";

export default function ActividadItem({
    numero,
    titulo,
    descripcion,
    tiempo
}) {
    const [completada, setCompletada] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.6,
                delay: numero * 0.15
            }}
            whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(91,44,131,0.12)"
            }}
            style={{
                background: completada ? "#F0FAF3" : "#FFFFFF",
                border: completada
                    ? "2px solid #4CAF50"
                    : "1px solid #E4DCE9",
                borderRadius: "18px",
                padding: "22px",
                marginBottom: "18px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
                transition: "background 0.3s ease, border 0.3s ease"
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start"
                }}
            >
                <div
                    style={{
                        minWidth: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        background: completada
                            ? "#4CAF50"
                            : "#5B2C83",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "18px"
                    }}
                >
                    {completada ? "✓" : numero}
                </div>

                <div style={{ flex: 1 }}>
                    <span
                        style={{
                            color: completada
                                ? "#4CAF50"
                                : "#F28C28",
                            fontSize: "0.78rem",
                            fontWeight: "bold",
                            textTransform: "uppercase"
                        }}
                    >
                        Actividad {numero}
                    </span>

                    <h3
                        style={{
                            margin: "5px 0 8px",
                            color: "#3D2352",
                            fontSize: "1.2rem"
                        }}
                    >
                        {titulo}
                    </h3>

                    <p
                        style={{
                            margin: "0 0 15px",
                            color: "#555",
                            lineHeight: "1.55"
                        }}
                    >
                        {descripcion}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "10px",
                            flexWrap: "wrap"
                        }}
                    >
                        <span
                            style={{
                                color: "#777",
                                fontSize: "0.85rem"
                            }}
                        >
                            ⏱️ {tiempo}
                        </span>

                        <motion.button
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            onClick={() =>
                                setCompletada(!completada)
                            }
                            style={{
                                background: completada
                                    ? "#4CAF50"
                                    : "#F28C28",
                                color: "white",
                                border: "none",
                                padding: "9px 16px",
                                borderRadius: "10px",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}
                        >
                            {completada
                                ? "✓ Actividad completada"
                                : "Marcar como completada"}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import ActividadItem from "./components/ActividadItem";

export default function App() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#F7F4F9",
                fontFamily: "'Segoe UI', sans-serif",
                color: "#333"
            }}
        >
            <HeaderClase
                tituloTema="La Feria del Producto"
                horario="Clase de Mercadotecnia • 4to Diversificado"
            />

            <main
                style={{
                    width: "92%",
                    maxWidth: "900px",
                    margin: "0 auto",
                    paddingBottom: "50px"
                }}
            >
                <ObjetivosCard
                    indicador="Desarrolla una propuesta empresarial a partir de la elección de un producto y la definición de los elementos básicos de una empresa."
                    competencia="Aplica conocimientos de mercadotecnia para desarrollar ideas de productos y construir una propuesta empresarial dirigida a un público específico."
                />

                <section>
                    <div
                        style={{
                            textAlign: "center",
                            margin: "35px 0 25px"
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                background: "#F3E9F8",
                                color: "#5B2C83",
                                padding: "7px 15px",
                                borderRadius: "20px",
                                fontSize: "0.8rem",
                                fontWeight: "bold",
                                marginBottom: "10px"
                            }}
                        >
                            🚀 MANOS A LA OBRA
                        </span>

                        <h2
                            style={{
                                margin: "5px 0",
                                color: "#3D2352",
                                fontSize: "2rem"
                            }}
                        >
                            Construyamos nuestra empresa
                        </h2>

                        <p
                            style={{
                                maxWidth: "650px",
                                margin: "10px auto",
                                color: "#666",
                                lineHeight: "1.5"
                            }}
                        >
                            Completa las actividades en equipo y comienza a
                            construir la propuesta que presentarás en la
                            Feria del Producto.
                        </p>
                    </div>

                    <ActividadItem
                        numero={1}
                        titulo="Elección del producto"
                        descripcion="En equipo, seleccionen el producto que desean presentar en la Feria del Producto. Analicen qué necesidad puede satisfacer y a qué tipo de consumidor podría dirigirse."
                        tiempo="15 minutos"
                    />

                    <ActividadItem
                        numero={2}
                        titulo="Votación del nombre de la empresa"
                        descripcion="Propongan diferentes nombres para su empresa y realicen una votación dentro del equipo. Seleccionen el nombre que consideren más adecuado para representar su propuesta."
                        tiempo="10 minutos"
                    />

                    <ActividadItem
                        numero={3}
                        titulo="Descripción de nuestra empresa"
                        descripcion="Describan el nombre elegido, qué tipo de empresa es y a qué se dedica. Expliquen de manera breve qué ofrece la empresa y cuál es su propósito."
                        tiempo="15 minutos"
                    />
                </section>
            </main>

            <footer
                style={{
                    background: "#3D2352",
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                    marginTop: "20px"
                }}
            >
                <p
                    style={{
                        margin: 0,
                        fontSize: "0.85rem"
                    }}
                >
                    Feria del Producto • Mercadotecnia • 4to Diversificado
                </p>
            </footer>
        </div>
    );
}
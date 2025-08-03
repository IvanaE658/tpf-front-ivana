

import { Layout } from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <h3>De qué trata el proyecto</h3>
      <p>Este proyecto consiste en el desarrollo de una página web para la venta de productos, pensada como una tienda online simple y funcional. Su objetivo principal es permitir a los usuarios visualizar productos, obtener información detallada sobre ellos y realizar pedidos de forma rápida y sencilla desde cualquier dispositivo.</p>

      <h3>A quién está dirigido</h3>
      <p>Esta página puede ser utilizada por pequeños emprendedores, negocios locales o cualquier persona que quiera ofrecer productos de forma online sin necesidad de plataformas externas.</p>

      <h3>Qué tecnologías/enfoques se usaron</h3>
      <p>La web está diseñada con una interfaz clara e intuitiva, adaptada para computadoras, tablets y celulares (diseño responsive). Incluye secciones como:</p>
      <p>Inicio: muestra una presentación general del sitio o productos destacados.
        Catálogo de productos: lista de artículos con imágenes, nombres, precios y botones para ver más detalles o agregar al carrito.</p>
      <p>Panel de administración: para cargar nuevos productos y gestionar el contenido.
      </p>
      <p>El proyecto está desarrollado con tecnologías web modernas como HTML, CSS, JavaScript y React, y puede ser conectado a una base de datos o integrarse con servicios de pago si se desea escalar.</p>
    </Layout >
  )
}

export { About }
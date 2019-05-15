import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/index";
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About - Camilo Ramirez" />
        <section className="posts">

          <article>
            <header>
              <h1 className="page-title"> About - Camilo Ramírez</h1>
            </header>

            <div className="post-description">
              <img width="100" height="100" alt="Andrew Wooldridge&#x27;s avatar" className="camilo-avatar"
                src="https://www.gravatar.com/avatar/8f0d9499742b9595a4888b06aae2d5b7?s=100"/>
                <p>Hola, soy Camilo Ramírez y soy desarrollador profesional con título de Tecnólogo en
                        Sistematización de datos (Si quieres ver mi proyecto de grado pulsa <a
                    href="https://github.com/camilortte/RecomendadorUD" target="_blank"
                    rel="noopener noreferrer">aqui</a> ) de la Universidad Distrital de Bogotá Colombia, actualmente
              estoy continuando con la Ingeniería en Telemática (Si, es doble titulación) en la misma
                        universidad.</p>
                <p>Tengo conocimientos en lenguajes de programación como C, C++, Java, Python y Javascript,.
                    Conocimientos en frameworks como Django, Django Ret Framework, Jquery, Angular, Qt, yJquery,
                    Angular, Qt, yJquery, Angular, Qt, yJquery, Angular, Qt, y QML, otros conocimientos en Bases
                    de datos relacionales SQL y sistema de control de versiones GIT . Experiencia en
                    arquitectura Rest, encolamiento de proceso y configuración de servidores AWS y servicios
                        relacionados.</p>
                <p>Me gusta aprender e implementar lo aprendido, encontrar soluciones a problemas desde esta
                        perspectiva, ten en cuenta que es el Software quien mueve nuestra civilización. ;)</p>
                <p>Este blog contiene ideas personales que quiero compartir, aquí encontrarás documentación de
                    mis desarrollos, errores, problemas, y experiencias en el fabuloso mundo de la programación,
                    que seguramente te podrán servir (Eso espero). Puedes ver todos mis desarrollos y
                        experimentos en <a href="https://github.com/camilortte" target="_blank"
                    rel="noopener noreferrer">GitHub</a>, y sí tienes dudas e inquietudes o simplemente quieres
                        contactarme lo puedes hacer a través de:</p>
                <ul>
                  <li><a href="mailto:camilolinchis@gmail.com" target="_blank"
                    rel="noopener noreferrer">camilolinchis@gmail.com</a></li>
                  <li>@camilortte en Twitte</li>
                  <li>+Google</li>
                </ul>
            </div>
          </article>
        </section>
      </Layout>
        )
      }
    }
    
    
    export default About
    
    export const pageQuery = graphql`
  query {
          site {
        siteMetadata {
          title
        }
        }
      }
    `

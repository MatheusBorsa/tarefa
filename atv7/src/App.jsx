import './App.css'

const Header = () => (
  <header>
    <h1>Meu Blog de Viagens</h1>
    <Navigation />
  </header>
)

const Navigation = () => (
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </nav>
)

const Article = ({ titulo, autor, data, conteudo, imagem, legenda }) => (
  <article>
    <h2>{titulo}</h2>
    <p>
      Publicado por <strong>{autor}</strong> em <time>{data}</time>
    </p>
    <div>
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
    </div>
    <figure>
      <img src={imagem} alt={legenda} />
      <figcaption>{legenda}</figcaption>
    </figure>
  </article>
)

const Sidebar = () => (
  <aside>
    <h3>Posts Relacionados</h3>
    <ul>
      <li><a href="#">Roteiro de 3 dias em Salvador</a></li>
      <li><a href="#">O que levar na mala para a praia</a></li>
      <li><a href="#">Top 5 destinos baratos no Brasil</a></li>
    </ul>
  </aside>
)

const Footer = () => (
  <footer>
    <p>&copy; 2024 - Todos os direitos reservados.</p>
  </footer>
)

function App() {
  const postData = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "João Silva",
    data: "15 de agosto de 2025",
    conteudo: [
      "Viajar pelo Nordeste foi uma experiência inesquecível. As praias têm águas cristalinas, clima agradável e paisagens que parecem ter saído de um cartão-postal.",
      "Entre as minhas favoritas estão Porto de Galinhas, Maragogi e Praia do Forte. Cada lugar tem uma energia única, ótima gastronomia e muitas opções para quem gosta de natureza e aventura."
    ],
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    legenda: "Vista de uma praia do Nordeste durante o pôr do sol."
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        <Article {...postData} />
      </main>
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

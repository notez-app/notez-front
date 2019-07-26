const GlobalStyle = () => (
  <style global jsx>{`
    :root {
      --black: rgb(55, 53, 47);
      --white: rgb(255, 255, 255);
    }

    html {
      -webkit-tap-highlight-color: transparent;
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      -webkit-tap-highlight-color: inherit;
    }
    html {
      font-size: 62.5%;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
        'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
        'Segoe UI Symbol', sans-serif;
      font-size: 1.6rem;
      color: var(--black);
      background-color: var(--white);
    }
    html,
    body,
    #__next {
      height: 100%;
    }
  `}</style>
)

const Home = () => (
  <>
    <GlobalStyle />

    <main>
      <section>
        <h1>Notez</h1>

        <p>(Comming soon!)</p>
      </section>
    </main>

    <style jsx>{`
      main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      section {
        text-align: center;
      }

      h1 {
        margin: 0;
        font-size: 3.7rem;
      }
    `}</style>
  </>
)

export default Home

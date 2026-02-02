import '@styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp

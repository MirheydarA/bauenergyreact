import React from 'react'

function Layout({children}) {
  return (
    <>
        <nav>
            Navbar
        </nav>

        <main>
            {children}
        </main>

        <footer>
            This is footer
        </footer>

    </>
  )
}

export default Layout
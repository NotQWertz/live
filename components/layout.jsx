export default function Layout({ user }) {

    return (
        <>
            <header className='header'>
                <ul>
                    <li>
                        <button style={{ display: 'flex', backgroundColor: 'transparent', color: 'inherit' }} onClick={() => window.location.href = '/'}>
                            <img src='data:image/jpeg;base64,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' alt=' picture' style={{ height: 38.7, borderRadius: 2 }} draggable={false} />
                            <div className='lunaSeemann'>Zuweyr</div>
                        </button>
                    </li>
                    <ul className='position-button'>
                        <li>
                            <button onClick={() => window.location.href = `https://github.com/notqwertz`} className='header-button'>
                                <svg xmlns='http://www.w3.org/2100/svg' width='21' height='21' viewBox='0 -1 24 24' className='header-ico'><path fill='#f0f0f0' d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.217 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.215.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' /></svg>
                                <div>GitHub</div>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => window.location.href = `https://twitter.com/`} className='header-button'>
                                <svg xmlns='http://www.w3.org/2100/svg' width='21' height='21' viewBox='0 -3 26 26' className='header-ico'><path fill='#f0f0f0' d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.215-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                <div>Twitter</div>
                            </button>
                        </li>
                    </ul>
                </ul>
            </header>
        </>
    )
}

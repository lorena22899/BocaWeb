export const Cabecalho = ({busca, buscaODA}) => {
    var logo=require('./img/logo.png');
    return (
        <html>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
            <nav className="navbar navbar-expand-lg text-white bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#!"><img src={logo} className="d-inline-block" alt='Logo BocaWeb'></img>BocaWeb Front</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a href="#!" className="nav-link btn-dark"> <i className="fas fa-info-circle"></i> Conheça o BocaWeb </a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link btn-dark"> <i className="fas fa-toolbox"></i>  Administração </a>
                        </li>
                        <li className="nav-item">
                            <a href="#!" className="nav-link btn-dark"> <i className="fas fa-envelope"></i> Contato </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" name='busca' type='text' value={busca} placeholder='Buscar ODAS' onChange={buscaODA}/>
                    </form>
                    </div>
                </div>
            </nav>
            </body>
        </html>
    )
}
export const Footer = () => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>
            <div>
                <footer className="custom-footer text-center text-white bg-dark">
                    <div className="container">
                    <hr className="my-5" />
                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <p>
                            O BocaWeb é um portal onde pessoas com deficiência visual terão acesso a informações contidas em imagens por meio de audiodescrição. Estamos formando um grande grupo de colaboradores voluntários para criar objetos em audiodescrição.
                            </p>
                        </div>
                        </div>
                    </section>
                    <section className="text-center mb-5">
                        <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                        <i className="fab fa-github"></i>
                        </a>
                    </section>
                    </div>
                    <div className="text-center p-3 copyright">
                    IFMS Dourados - Trabalho de Frameworks2 – Kamilly Lorena e Bianca Lopes
                    </div>
                </footer>
            </div>
            </body>
        </html>
    )
}
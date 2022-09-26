export const Lista = ({odas}) => {
  return( 
    <div>
      <p className="quantidadeODA"> {odas.length} odas </p>
        <div className='lista row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0'>
          {odas.map(oda => (
            <div className="card key={oda._id}">
              <div className="card-body">
                <h5 className="card-title">Nome: {oda.nome}</h5>
                <h6 className="card-subtitle text-muted mb-2">Usuário: {oda.usuario}</h6>
                <p className="card-text">Descrição: {oda.descricao}</p>
              </div>
              <div className="card-footer">Data inclusão: {oda.data_inclusao}</div>
              <div className="card-footer">Palavras chave: {oda.palavras_chave}</div>
            </div>
          ))}
      </div>
    </div>
  )    
}
function CaixaFormulario(props){
    return(
        <div className={props.class}>
        <input
          name={props.name}
          id={props.id}
          type={props.type}
          placeholder= {props.placeholder}
          required={props.required}
          onChange={e => props.evento(e.target.value)}
          value={props.campo}
        />
        <label htmlFor={props.name}>{props.label}</label>
      </div>
    )
}

export default CaixaFormulario;
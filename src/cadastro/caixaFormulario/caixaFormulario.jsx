function CaixaFormulario(props){
    return(
        <div class={props.class}>
        <input
          name={props.name}
          id={props.id}
          type={props.type}
          placeholder= {props.placeholder}
          required={props.required}
        />
        <label for={props.name}>{props.label}</label>
      </div>
    )
}

export default CaixaFormulario;
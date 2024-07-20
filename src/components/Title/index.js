const Title = (props) => {
    const {title, attributes} = props ?? {};
  
    return (
      <div style={attributes?.styles}>
        {title}
      </div>
    )
}

export default Title;
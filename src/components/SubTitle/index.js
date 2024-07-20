const SubTitle = (props) => {
    const {title, attributes} = props ?? {};
  
    return (
      <div style={attributes?.styles}>
        {title}
      </div>
    )
}

export default SubTitle;
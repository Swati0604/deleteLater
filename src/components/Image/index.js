const Image = (props) => {

  const {action, attributes, data} = props ?? {};
  const {styles, src, alt} = attributes ?? {};
    return (
        <>
          <img src={src} alt={alt} style={styles} />
        </>
    )
}

export default Image;
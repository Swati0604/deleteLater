const AnchorLink = (props) => {
    const {action, attributes, data} = props ?? {};
    const {url, target} = action ?? {};
    const {styles} = attributes ?? {};

    return (
        <a href={url} target={target} style={styles}>{data.title}</a>
    )
}

export default AnchorLink;
import { ComponentMap } from "./componentMap";

export const section = (sectionData) => {
    const widgetType = sectionData.type;
    const Component = ComponentMap[widgetType];

    if(!Component) {
      return null;
    }

    return (
      <div style={sectionData.attributes?.styles}>
        <Component {...sectionData} />
      </div>
    )
}
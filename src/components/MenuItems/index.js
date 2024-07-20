import { ComponentMap } from "../../utils/componentMap";


const MenuItems = (sectionData) => {
    return (
        <div style={sectionData.attributes.styles}>
        {sectionData &&
            sectionData?.data?.menuItems.map((widget, index) => {
              const widgetType = widget.type;

              const Component = ComponentMap[widgetType];
    
              
              if (!Component) {
                return null;
              }
              const testId = `${widgetType}-${index}`;
              return (
                <div
                  key={testId}
                  style={widget?.attributes?.styles}
                >
                  <Component {...widget} />
                </div>
              );
            }
        )}
        </div>
    )
}

export default MenuItems;
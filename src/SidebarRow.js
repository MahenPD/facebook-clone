import React from 'react'
import './SidebarRow.css'

function SidebarRow(props) {
    const [src, Icon, title] = props;

    return (
        <div className="sidebarRow">
            {/* {src && <Avatar src={src} />} */}
            {Icon && <Icon />}
            <p>{title}</p>

        </div>
    )
}

export default SidebarRow

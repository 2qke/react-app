import { useState } from "react"


function Tab({ children, activeTab }) {
const [active , setActive] = useState(activeTab)
    return (
        <div>
            <nav>
                {children.map((tab, index) => (
                    <button 
                    onClick={() => setActive(index)}
                    className={active == index ? 'bg-green-200 p-1 rounded duration-300' : 'bg-gray-300'} 
                    key={index}>
                        {tab.props.title}</button>
                ))}
            </nav>
            {children[active]}
        </div>
    )
}

Tab.Panel = function({children}) {
    return (
        <div>{children}</div>
    )
}

export default Tab
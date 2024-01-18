import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";
import TabContent from "./components/TabContent/TabContent.jsx";

function App() {
    const [tabContent, setTabContent] = useState();

    function handleSelect(tabSelected) {
        setTabContent(tabSelected);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((data, index) => (
                            <CoreConcept key={index} {...data} />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {CORE_CONCEPTS.map((item, index) => (
                            <TabButton
                                key={index}
                                onSelect={() => handleSelect(item.title)}
                            >
                                {item.title}
                            </TabButton>
                        ))}
                    </menu>
                    <div id="tab-content">
                        {tabContent ? (
                            <TabContent
                                {...EXAMPLES[tabContent.toLowerCase()]}
                            />
                        ) : (
                            <p>Please click a Tab!</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;

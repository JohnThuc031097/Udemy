import { CORE_CONCEPTS, EXAMPLES } from "../data";
import TabContent from "./TabContent/TabContent";
import TabButton from "./TabButton/TabButton";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [tabContent, setTabContent] = useState();

    function handleSelect(tabSelected) {
        setTabContent(tabSelected);
    }

    return (
        <Section id="examples">
            <Tabs
                // buttonsContainer="menu"
                buttons={CORE_CONCEPTS.map((item, index) => (
                    <TabButton
                        key={index}
                        onSelect={() => handleSelect(item.title)}
                    >
                        {item.title}
                    </TabButton>
                ))}
            >
                <div id="tab-content">
                    {tabContent ? (
                        <TabContent {...EXAMPLES[tabContent.toLowerCase()]} />
                    ) : (
                        <p>Please click a Tab!</p>
                    )}
                </div>
            </Tabs>
        </Section>
    );
}

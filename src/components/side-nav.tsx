import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import Badge from "@cloudscape-design/components/badge";

export default function MySideNavigation({ onSelectStatus }) {
    const [activeHref, setActiveHref] = React.useState(
        "#/page1"
    );
    return (
        <SideNavigation
            activeHref={activeHref}
            header={{ href: "#/", text: "Prescriptions" }}
            onFollow={event => {
                if (!event.detail.external) {
                    event.preventDefault();
                    setActiveHref(event.detail.href);

                    // Find the clicked item to get the `status`
                    onSelectStatus(event.detail.status);

                }
            }}
            items={[
                { type: "link", text: "Vet Approve", href: "#/page1", status: "APPROVE" },
                { type: "link", text: "Vet Attention - (tel)", href: "#/page2", status: "VET_ATTENTION" },
                { type: "link", text: "Vet Attention - (email)", href: "#/page3", status: "VET_ATTENTION" },
                { type: "link", text: "Assign Products", href: "#/page4", status: "ASSIGN" },
                { type: "divider" },
                {
                    type: "link",
                    text: "Notifications",
                    href: "#/notifications",
                    info: <Badge color="red">23</Badge>
                },
                {
                    type: "link",
                    text: "Documentation",
                    href: "https://example.com",
                    external: true
                }
            ]}
        />
    );
}
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function NavigationBar({ utilities }) {
    const { user } = useAuthenticator();

    return (
        <TopNavigation
            identity={{
                href: "#",
                title: "Animed",
                logo: {
                    src: "/public/logo.svg",
                    alt: "logo",
                },
            }}
            utilities={utilities}
        />
    );
}
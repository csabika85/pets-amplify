import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { prescriptionsList } from './graphql/queries';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import "@cloudscape-design/global-styles/index.css"
import { useAuthenticator } from '@aws-amplify/ui-react';

import TopNavigation from "./components/top-navigation.tsx";
import SideNavigation from "./components/side-nav.tsx"
import Cards from "@cloudscape-design/components/cards";
import CopyToClipboard from "@cloudscape-design/components/copy-to-clipboard";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";

import Grid from "@cloudscape-design/components/grid";

Amplify.configure(config);

const client = generateClient();

function ListPrescriptions() {
    const [prescriptions, setPrescriptions] = useState<any[]>([]);
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const [status, setStatus] = useState("APPROVE");
    const { user, signOut } = useAuthenticator();

    const handleUtilityClick = async (e: CustomEvent) => {
        if (e.detail.id === 'signout') {
            signOut();
        }
    };

    const topNavUtilities = [
        {
            type: 'menu-dropdown',
            text: user?.signInDetails?.loginId || 'User',
            description: user?.signInDetails?.loginId,
            iconName: 'user-profile',
            onItemClick: handleUtilityClick,
            items: [
                { id: 'profile', text: 'Profile' },
                { id: 'settings', text: 'Settings' },
                {
                    id: 'signout',
                    text: 'Sign out'
                }
            ]
        }
    ];

    useEffect(() => {
        (async () => {
            try {
                const { data } = await client.graphql({
                    query: prescriptionsList,
                    variables: { status },
                });

                setPrescriptions(data?.prescriptionsList?.items ?? []);
            } catch (error) {
                console.error('Error fetching prescriptions:', error);
            }
        })();
    }, [status]);



    return (
        <>
            <div style={{ position: 'sticky', top: 0, zIndex: 1002, backgroundColor: '#fff' }}>
                <TopNavigation utilities={topNavUtilities} />
            </div>
            <Grid
                gridDefinition={[{ colspan: 3 }, { colspan: 9 }]}
            >
                <div className={"column-1"}>
                    <SideNavigation onSelectStatus={setStatus} />
                </div>
                <div className={"column-2"}>
                    <div>
                        <Cards
                            ariaLabels={{
                                itemSelectionLabel: (e, item) => `Select prescription ${item.id}`,
                                selectionGroupLabel: "Prescription selection",
                            }}
                            cardDefinition={{
                                header: prescription => `#${prescription.id}`,
                                sections: [
                                    {
                                        id: "status",
                                        header: "Status",
                                        content: prescription => prescription.status,
                                    },
                                    {
                                        id: "sent",
                                        header: "Sent",
                                        content: prescription => `${new Date(prescription.createdAt).toLocaleDateString()}`,
                                    },
                                    {
                                        id: "order-id",
                                        header: "Order",
                                        content: prescription => (
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                                <span>{prescription.orderIncrementId}</span>
                                                <div
                                                    onClick={e => e.stopPropagation()} // 🛑 prevent card selection
                                                >
                                                    <CopyToClipboard
                                                        copyButtonAriaLabel="Copy order number"
                                                        copyErrorText="Order number failed to copy"
                                                        copySuccessText={`Order ${prescription.orderIncrementId} copied`}
                                                        textToCopy={prescription.orderIncrementId}
                                                        variant="icon"
                                                    />
                                                </div>
                                            </div>
                                        ),
                                    },
                                    {
                                        id: "customer",
                                        header: "Customer",
                                        content: prescription => prescription.customerName,
                                    },
                                ],
                            }}
                            cardsPerRow={[
                                {cards: 1},
                                {minWidth: 300, cards: 4}
                            ]}
                            filter={
                                <TextFilter filteringPlaceholder="Search by prescription ID"/>
                            }
                            header={
                                <Header
                                    counter={
                                        selectedItems?.length
                                            ? "(" + selectedItems.length + "/10)"
                                            : "(10)"
                                    }
                                >
                                    Prescriptions awaiting approval (#)
                                </Header>
                            }
                            pagination={
                                <Pagination currentPageIndex={1} pagesCount={2}/>
                            }
                            items={prescriptions}
                            selectionType="multi"
                            selectedItems={selectedItems}
                            entireCardClickable
                            onSelectionChange={({detail}) => setSelectedItems(detail.selectedItems)}
                            loadingText="Loading prescriptions..."
                            empty="No prescriptions found."
                            variant="full-page"
                        />
                    </div>
                </div>
            </Grid>
        </>
    );
}

export default ListPrescriptions;
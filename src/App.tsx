import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { getPets } from './graphql/queries';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

Amplify.configure(config);


const client = generateClient();

function PetList() {
    const [pets, setPets] = useState<any[]>([]);
    const customerId = 57; // 👈 Replace this with your actual value

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const { data } = await client.graphql({
                    query: getPets,
                    variables: { customerId },
                });

                // If the response is an array:
                setPets((data.getPets ?? []).filter((p): p is NonNullable<typeof p> => p !== null));
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };

        fetchPets();
    }, [customerId]);

    return (
        <div>
            <h1>Pets for Customer {customerId}</h1>
            <ul>
                {pets.map((pet: any) => (
                    <li key={pet.uuid}>
                        <strong>{pet.name}</strong> ({pet.species}) - Weight: {pet.weight}kg
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PetList;

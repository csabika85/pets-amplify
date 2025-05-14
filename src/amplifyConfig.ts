// src/amplifyConfig.ts
import { GraphQLAuthMode } from 'aws-amplify/api';
import type { ResourcesConfig } from 'aws-amplify';
import config from './aws-exports';

// Convert the string 'apiKey' to GraphQLAuthMode.API_KEY
const updatedConfig: ResourcesConfig = {
    ...config,
    API: {
        ...config.API,
        GraphQL: {
            ...config.API?.GraphQL,
            defaultAuthMode: GraphQLAuthMode.API_KEY, // 🔥 This fixes the type error
        },
    },
};

export default updatedConfig;
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPet = /* GraphQL */ `query GetPet($customerId: Int!, $uuid: String!) {
  getPet(customerId: $customerId, uuid: $uuid) {
    uuid
    customerId
    farmGate
    gender
    species
    weight
    foodChain
    cphNumber
    accountType
    active
    medication
    name
    healthy
    medicationNotes
    foodUse
    pregnant
    dob
    healthNotes
    count
    passport
    tags
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPetQueryVariables, APITypes.GetPetQuery>;
export const getPets = /* GraphQL */ `query GetPets($customerId: Int!) {
  getPets(customerId: $customerId) {
    uuid
    customerId
    farmGate
    gender
    species
    weight
    foodChain
    cphNumber
    accountType
    active
    medication
    name
    healthy
    medicationNotes
    foodUse
    pregnant
    dob
    healthNotes
    count
    passport
    tags
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPetsQueryVariables, APITypes.GetPetsQuery>;
export const getPetSnapshot = /* GraphQL */ `query GetPetSnapshot($uuid: String!) {
  getPetSnapshot(uuid: $uuid) {
    uuid
    petUuid
    customerId
    orderId
    quoteItemId
    farmGate
    gender
    species
    weight
    foodChain
    cphNumber
    accountType
    active
    medication
    name
    healthy
    medicationNotes
    foodUse
    pregnant
    dob
    healthNotes
    count
    passport
    tags
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPetSnapshotQueryVariables,
  APITypes.GetPetSnapshotQuery
>;

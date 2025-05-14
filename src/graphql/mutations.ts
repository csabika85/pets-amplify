/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addPet = /* GraphQL */ `mutation AddPet($input: PetInput) {
  addPet(input: $input) {
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
` as GeneratedMutation<
  APITypes.AddPetMutationVariables,
  APITypes.AddPetMutation
>;
export const addPetSnapshot = /* GraphQL */ `mutation AddPetSnapshot($input: PetSnapshotInput) {
  addPetSnapshot(input: $input) {
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
` as GeneratedMutation<
  APITypes.AddPetSnapshotMutationVariables,
  APITypes.AddPetSnapshotMutation
>;
export const deletePet = /* GraphQL */ `mutation DeletePet($customerId: Int!, $uuid: String!) {
  deletePet(customerId: $customerId, uuid: $uuid) {
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
` as GeneratedMutation<
  APITypes.DeletePetMutationVariables,
  APITypes.DeletePetMutation
>;
export const deletePetSnapshot = /* GraphQL */ `mutation DeletePetSnapshot($uuid: String!) {
  deletePetSnapshot(uuid: $uuid) {
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
` as GeneratedMutation<
  APITypes.DeletePetSnapshotMutationVariables,
  APITypes.DeletePetSnapshotMutation
>;
export const updatePet = /* GraphQL */ `mutation UpdatePet($input: UpdatePetsInput) {
  updatePet(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePetMutationVariables,
  APITypes.UpdatePetMutation
>;
export const updatePetSnapshot = /* GraphQL */ `mutation UpdatePetSnapshot($input: UpdatePetSnapshotInput) {
  updatePetSnapshot(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePetSnapshotMutationVariables,
  APITypes.UpdatePetSnapshotMutation
>;

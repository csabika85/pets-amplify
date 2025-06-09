/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const amendPrescriptionItem = /* GraphQL */ `mutation AmendPrescriptionItem($data: AmendPrescriptionItemMutationInput!) {
  amendPrescriptionItem(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AmendPrescriptionItemMutationVariables,
  APITypes.AmendPrescriptionItemMutation
>;
export const amendPrescriptionValidity = /* GraphQL */ `mutation AmendPrescriptionValidity($data: AmendPrescriptionValidityInput!) {
  amendPrescriptionValidity(data: $data) {
    success
    errorMessage
    details {
      PK
      id
      orderIncrementId
      status
      lastViewedOn
      validFrom
      validUntil
      issuedByCvsVet
      approvedOn
      createdAt
      updatedAt
      consumedByOrderIds
      vmdComplianceReview
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AmendPrescriptionValidityMutationVariables,
  APITypes.AmendPrescriptionValidityMutation
>;
export const createPrescriptionNote = /* GraphQL */ `mutation CreatePrescriptionNote($data: CreateNoteInput!) {
  createPrescriptionNote(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePrescriptionNoteMutationVariables,
  APITypes.CreatePrescriptionNoteMutation
>;
export const deletePrescriptionNote = /* GraphQL */ `mutation DeletePrescriptionNote($data: DeleteNoteInput!) {
  deletePrescriptionNote(data: $data) {
    success
    errorMessage
    details {
      deletedAt
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePrescriptionNoteMutationVariables,
  APITypes.DeletePrescriptionNoteMutation
>;
export const createPrescriptionItem = /* GraphQL */ `mutation CreatePrescriptionItem($data: PrescriptionItemInput!) {
  createPrescriptionItem(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePrescriptionItemMutationVariables,
  APITypes.CreatePrescriptionItemMutation
>;
export const deletePrescriptionItem = /* GraphQL */ `mutation DeletePrescriptionItem($data: DeletePrescriptionItemInput!) {
  deletePrescriptionItem(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePrescriptionItemMutationVariables,
  APITypes.DeletePrescriptionItemMutation
>;
export const swapPrescriptionItemSku = /* GraphQL */ `mutation SwapPrescriptionItemSku(
  $prescriptionId: String!
  $oldSku: String!
  $newSku: String!
  $newProductName: String!
  $user: PmsUserInput!
  $reason: String!
) {
  swapPrescriptionItemSku(
    prescriptionId: $prescriptionId
    oldSku: $oldSku
    newSku: $newSku
    newProductName: $newProductName
    user: $user
    reason: $reason
  ) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SwapPrescriptionItemSkuMutationVariables,
  APITypes.SwapPrescriptionItemSkuMutation
>;
export const updatePrescriptionIssuedByCvsVet = /* GraphQL */ `mutation UpdatePrescriptionIssuedByCvsVet($data: issuedByCvsVetInput!) {
  updatePrescriptionIssuedByCvsVet(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrescriptionIssuedByCvsVetMutationVariables,
  APITypes.UpdatePrescriptionIssuedByCvsVetMutation
>;
export const updatePrescriptionVmdComplianceReview = /* GraphQL */ `mutation UpdatePrescriptionVmdComplianceReview(
  $data: vmdComplianceReviewInput!
) {
  updatePrescriptionVmdComplianceReview(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrescriptionVmdComplianceReviewMutationVariables,
  APITypes.UpdatePrescriptionVmdComplianceReviewMutation
>;
export const updatePrescriptionValidity = /* GraphQL */ `mutation UpdatePrescriptionValidity($data: UpdatePrescriptionValidityInput!) {
  updatePrescriptionValidity(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrescriptionValidityMutationVariables,
  APITypes.UpdatePrescriptionValidityMutation
>;
export const updatePrescriptionStatus = /* GraphQL */ `mutation UpdatePrescriptionStatus($data: UpdatePrescriptionStatusInput!) {
  updatePrescriptionStatus(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrescriptionStatusMutationVariables,
  APITypes.UpdatePrescriptionStatusMutation
>;
export const assignCustomerToPrescription = /* GraphQL */ `mutation AssignCustomerToPrescription($data: AssignCustomerInput!) {
  assignCustomerToPrescription(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AssignCustomerToPrescriptionMutationVariables,
  APITypes.AssignCustomerToPrescriptionMutation
>;
export const reassignCustomerOnPrescription = /* GraphQL */ `mutation ReassignCustomerOnPrescription($data: AssignCustomerInput!) {
  reassignCustomerOnPrescription(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ReassignCustomerOnPrescriptionMutationVariables,
  APITypes.ReassignCustomerOnPrescriptionMutation
>;
export const removeCustomerFromPrescription = /* GraphQL */ `mutation RemoveCustomerFromPrescription($data: RemoveCustomerInput!) {
  removeCustomerFromPrescription(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.RemoveCustomerFromPrescriptionMutationVariables,
  APITypes.RemoveCustomerFromPrescriptionMutation
>;
export const createFileUploadUrl = /* GraphQL */ `mutation CreateFileUploadUrl($imageName: String) {
  createFileUploadUrl(imageName: $imageName) {
    url
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFileUploadUrlMutationVariables,
  APITypes.CreateFileUploadUrlMutation
>;
export const regeneratePrescriptionThumbnails = /* GraphQL */ `mutation RegeneratePrescriptionThumbnails($prescriptionId: String!) {
  regeneratePrescriptionThumbnails(prescriptionId: $prescriptionId) {
    success
    errorMessage
    files {
      original
      small
      medium
      large
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.RegeneratePrescriptionThumbnailsMutationVariables,
  APITypes.RegeneratePrescriptionThumbnailsMutation
>;
export const rotatePrescriptionImage = /* GraphQL */ `mutation RotatePrescriptionImage($data: RotatePrescriptionImageInput!) {
  rotatePrescriptionImage(data: $data) {
    success
    errorMessage
    files {
      original
      small
      medium
      large
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.RotatePrescriptionImageMutationVariables,
  APITypes.RotatePrescriptionImageMutation
>;
export const mergePrescriptions = /* GraphQL */ `mutation MergePrescriptions($data: MergePrescriptionsInput!) {
  mergePrescriptions(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.MergePrescriptionsMutationVariables,
  APITypes.MergePrescriptionsMutation
>;
export const unmergePrescriptionImage = /* GraphQL */ `mutation UnmergePrescriptionImage($data: UnMergePrescriptionImageInput!) {
  unmergePrescriptionImage(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UnmergePrescriptionImageMutationVariables,
  APITypes.UnmergePrescriptionImageMutation
>;
export const orderResendRequest = /* GraphQL */ `mutation OrderResendRequest($data: OrderResendRequestMutationInput) {
  orderResendRequest(data: $data) {
    success
    errorMessage
    details {
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.OrderResendRequestMutationVariables,
  APITypes.OrderResendRequestMutation
>;
export const deleteOrderResendRequest = /* GraphQL */ `mutation DeleteOrderResendRequest(
  $orderIncrementId: String!
  $resendRequestSk: String!
) {
  deleteOrderResendRequest(
    orderIncrementId: $orderIncrementId
    resendRequestSk: $resendRequestSk
  ) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderResendRequestMutationVariables,
  APITypes.DeleteOrderResendRequestMutation
>;
export const createOperatorMessage = /* GraphQL */ `mutation CreateOperatorMessage($data: CreateOperatorMessageInput!) {
  createOperatorMessage(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOperatorMessageMutationVariables,
  APITypes.CreateOperatorMessageMutation
>;
export const createDefaultLabel = /* GraphQL */ `mutation CreateDefaultLabel($data: DefaultLabelInput!) {
  createDefaultLabel(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDefaultLabelMutationVariables,
  APITypes.CreateDefaultLabelMutation
>;
export const createLabel = /* GraphQL */ `mutation CreateLabel(
  $orderItemId: String!
  $labelsLastUpdatedAt: AWSDateTime
  $data: [LabelInput]!
  $isApproved: Boolean!
  $user: PmsUserInput
) {
  createLabel(
    orderItemId: $orderItemId
    labelsLastUpdatedAt: $labelsLastUpdatedAt
    data: $data
    isApproved: $isApproved
    user: $user
  ) {
    success
    errorMessage
    details {
      PK
      classification
      createdAt
      customerName
      customerEmail
      customerId
      entityStatus
      incrementId
      itemId
      name
      priority
      qtyOrdered
      sku
      updatedAt
      labelsCreatedAt
      labelsUpdatedAt
      labelsApprovedAt
      magentoOrderEntityId
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLabelMutationVariables,
  APITypes.CreateLabelMutation
>;
export const editLabelAfterApproval = /* GraphQL */ `mutation EditLabelAfterApproval(
  $orderItemId: String!
  $labelsLastUpdatedAt: AWSDateTime!
  $data: [LabelInput]!
  $user: PmsUserInput
) {
  editLabelAfterApproval(
    orderItemId: $orderItemId
    labelsLastUpdatedAt: $labelsLastUpdatedAt
    data: $data
    user: $user
  ) {
    success
    errorMessage
    details {
      PK
      classification
      createdAt
      customerName
      customerEmail
      customerId
      entityStatus
      incrementId
      itemId
      name
      priority
      qtyOrdered
      sku
      updatedAt
      labelsCreatedAt
      labelsUpdatedAt
      labelsApprovedAt
      magentoOrderEntityId
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.EditLabelAfterApprovalMutationVariables,
  APITypes.EditLabelAfterApprovalMutation
>;
export const changeOrderStatus = /* GraphQL */ `mutation ChangeOrderStatus($data: ChangeOrderStatusInput!) {
  changeOrderStatus(data: $data) {
    success
    errorMessage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ChangeOrderStatusMutationVariables,
  APITypes.ChangeOrderStatusMutation
>;
export const prescription = /* GraphQL */ `mutation Prescription($data: PrescriptionInput!) {
  prescription(data: $data) {
    success
    errorMessage
    details {
      PK
      id
      orderIncrementId
      status
      lastViewedOn
      validFrom
      validUntil
      issuedByCvsVet
      approvedOn
      createdAt
      updatedAt
      consumedByOrderIds
      vmdComplianceReview
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.PrescriptionMutationVariables,
  APITypes.PrescriptionMutation
>;

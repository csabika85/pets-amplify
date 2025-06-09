/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const prescriptionsList = /* GraphQL */ `query PrescriptionsList($status: PrescriptionStatusEnum!) {
  prescriptionsList(status: $status) {
    success
    errorMessage
    items {
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
    totalCount
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PrescriptionsListQueryVariables,
  APITypes.PrescriptionsListQuery
>;
export const customerPrescriptions = /* GraphQL */ `query CustomerPrescriptions($customerId: ID!) {
  customerPrescriptions(customerId: $customerId) {
    approve {
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
    assign {
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
    assigned {
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
    customerAttention {
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
    vetAttention {
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
    fulfilled {
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
    deleted {
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
    fraudulent {
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
    expired {
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
    merged {
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
    imageGenerationFailed {
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
` as GeneratedQuery<
  APITypes.CustomerPrescriptionsQueryVariables,
  APITypes.CustomerPrescriptionsQuery
>;
export const customerSearch = /* GraphQL */ `query CustomerSearch($lastName: String, $email: String) {
  customerSearch(lastName: $lastName, email: $email) {
    customers {
      id
      email
      firstName
      lastName
      __typename
    }
    totalCount
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CustomerSearchQueryVariables,
  APITypes.CustomerSearchQuery
>;
export const productSearch = /* GraphQL */ `query ProductSearch($searchString: String) {
  productSearch(searchString: $searchString) {
    items {
      name
      sku
      __typename
    }
    totalCount
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductSearchQueryVariables,
  APITypes.ProductSearchQuery
>;
export const assignPrescriptionsToOrdersDryRun = /* GraphQL */ `query AssignPrescriptionsToOrdersDryRun($prescriptionId: ID!) {
  assignPrescriptionsToOrdersDryRun(prescriptionId: $prescriptionId) {
    errorMessage
    orders {
      entityType
      entityStatus
      createdAt
      updatedAt
      incrementId
      customerId
      canBeFulfilled
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AssignPrescriptionsToOrdersDryRunQueryVariables,
  APITypes.AssignPrescriptionsToOrdersDryRunQuery
>;
export const labelListData = /* GraphQL */ `query LabelListData($listType: ListType, $limit: Int, $nextToken: String) {
  labelListData(listType: $listType, limit: $limit, nextToken: $nextToken) {
    items {
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
` as GeneratedQuery<
  APITypes.LabelListDataQueryVariables,
  APITypes.LabelListDataQuery
>;
export const operatorMessageList = /* GraphQL */ `query OperatorMessageList($orderItemPk: String!) {
  operatorMessageList(orderItemPk: $orderItemPk) {
    userName
    content
    addressedTo
    subject
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OperatorMessageListQueryVariables,
  APITypes.OperatorMessageListQuery
>;
export const orderItemLabelData = /* GraphQL */ `query OrderItemLabelData($PK: ID!) {
  orderItemLabelData(PK: $PK) {
    PK
    classification
    createdAt
    customerAssignedPetSnapshots {
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
    customerName
    customerEmail
    customerId
    customerNotes {
      message
      messageId
      updatedAt
      user
      __typename
    }
    defaultLabel {
      conditional
      delivery
      frequency
      method
      prescriptionText
      prescriptionWarning
      quantity
      specific
      warnings
      __typename
    }
    entityStatus
    incrementId
    itemId
    labels {
      PK
      SK
      petUuids
      petNameAndSpecies
      conditional
      delivery
      frequency
      method
      prescriptionText
      prescriptionWarning
      pickQty
      quantity
      specific
      warnings
      __typename
    }
    name
    prescriptionLinks {
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
    priority
    qtyOrdered
    sku
    updatedAt
    labelsCreatedAt
    labelsCreatedBy {
      email
      firstName
      lastName
      __typename
    }
    labelsUpdatedAt
    labelsUpdatedBy {
      email
      firstName
      lastName
      __typename
    }
    labelsApprovedAt
    labelsApprovedBy {
      email
      firstName
      lastName
      __typename
    }
    customerAddressData {
      city
      firstname
      lastname
      street
      postcode
      __typename
    }
    magentoOrderEntityId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderItemLabelDataQueryVariables,
  APITypes.OrderItemLabelDataQuery
>;
export const orderCommentsList = /* GraphQL */ `query OrderCommentsList($magentoEntityId: Int!) {
  orderCommentsList(magentoEntityId: $magentoEntityId) {
    comment
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderCommentsListQueryVariables,
  APITypes.OrderCommentsListQuery
>;
export const getDefaultLabel = /* GraphQL */ `query GetDefaultLabel($sku: String!) {
  getDefaultLabel(sku: $sku) {
    conditional
    delivery
    frequency
    method
    prescriptionText
    prescriptionWarning
    quantity
    specific
    warnings
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDefaultLabelQueryVariables,
  APITypes.GetDefaultLabelQuery
>;
export const searchOrderId = /* GraphQL */ `query SearchOrderId($orderId: String!) {
  searchOrderId(orderId: $orderId) {
    incrementId
    PK
    entityStatus
    createdAt
    customerName
    customerEmail
    orderResendRequests {
      entityStatus
      createdAt
      updatedAt
      deletedAt
      PK
      SK
      reasonCode
      note
      newOrderIncrementId
      __typename
    }
    prescriptionAssociations {
      SK
      entityType
      createdAt
      __typename
    }
    items {
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
    holdReason
    heldBy {
      email
      firstName
      lastName
      __typename
    }
    heldOn
    orderComments {
      comment
      createdAt
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchOrderIdQueryVariables,
  APITypes.SearchOrderIdQuery
>;
export const listOrdersByStatus = /* GraphQL */ `query ListOrdersByStatus($status: OrderStatus!) {
  listOrdersByStatus(status: $status) {
    items {
      incrementId
      PK
      entityStatus
      createdAt
      customerName
      customerEmail
      holdReason
      heldOn
      __typename
    }
    nextToken
    totalCount
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByStatusQueryVariables,
  APITypes.ListOrdersByStatusQuery
>;
export const orderResendRequestList = /* GraphQL */ `query OrderResendRequestList($orderResendStatus: OrderResendStatus!) {
  orderResendRequestList(orderResendStatus: $orderResendStatus) {
    orderIncrementId
    orderDate
    customerName
    entityStatus
    orderStatus
    PK
    SK
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderResendRequestListQueryVariables,
  APITypes.OrderResendRequestListQuery
>;
export const prescriptionNotes = /* GraphQL */ `query PrescriptionNotes($prescriptionPk: String!) {
  prescriptionNotes(prescriptionPk: $prescriptionPk) {
    PK
    id
    content
    createdAt
    createdBy {
      email
      firstName
      lastName
      __typename
    }
    updatedAt
    updatedBy {
      email
      firstName
      lastName
      __typename
    }
    deletedAt
    deletedBy {
      email
      firstName
      lastName
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PrescriptionNotesQueryVariables,
  APITypes.PrescriptionNotesQuery
>;

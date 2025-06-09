/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AmendPrescriptionItemMutationInput = {
  prescriptionId: string,
  sku: string,
  user: PmsUserInput,
  quantityPrescribed: number,
  repeatCount: number,
  validUntil: string,
  amendmentReason: string,
};

export type PmsUserInput = {
  email: string,
  firstName: string,
  lastName: string,
};

export type MutationResponse = {
  __typename: "MutationResponse",
  success: boolean,
  errorMessage?: string | null,
};

export type AmendPrescriptionValidityInput = {
  prescriptionId: string,
  validFrom: string,
  validUntil: string,
  user: PmsUserInput,
  reason: string,
};

export type PrescriptionMutationResponse = {
  __typename: "PrescriptionMutationResponse",
  success: boolean,
  errorMessage?: string | null,
  details?: Prescription | null,
};

export type Prescription = {
  __typename: "Prescription",
  PK?: string | null,
  id?: string | null,
  orderIncrementId?: string | null,
  customer?: Customer | null,
  status?: PrescriptionStatusEnum | null,
  files?:  Array<Files | null > | null,
  lastViewedBy?: PmsUser | null,
  lastViewedOn?: string | null,
  validFrom?: string | null,
  validUntil?: string | null,
  issuedByCvsVet?: boolean | null,
  approvedBy?: PmsUser | null,
  approvedOn?: string | null,
  createdAt: string,
  updatedAt?: string | null,
  notes?:  Array<Note | null > | null,
  consumedByOrderIds?: Array< string | null > | null,
  items?:  Array<PrescriptionItem | null > | null,
  orderAssociations?:  Array<PrescriptionOrderAssociation | null > | null,
  vmdComplianceReview?: boolean | null,
};

export type Customer = {
  __typename: "Customer",
  id: number,
  email: string,
  firstName?: string | null,
  lastName?: string | null,
  pets?:  Array<Pet | null > | null,
};

export type Pet = {
  __typename: "Pet",
  uuid: string,
  customerId: number,
  farmGate?: boolean | null,
  gender?: string | null,
  species?: string | null,
  weight?: number | null,
  foodChain?: boolean | null,
  cphNumber?: number | null,
  accountType?: string | null,
  active?: boolean | null,
  medication?: boolean | null,
  name?: string | null,
  healthy?: boolean | null,
  medicationNotes?: string | null,
  foodUse?: Array< string | null > | null,
  pregnant?: boolean | null,
  dob?: string | null,
  healthNotes?: string | null,
  count?: number | null,
  passport?: string | null,
  tags?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export enum PrescriptionStatusEnum {
  APPROVE = "APPROVE",
  ASSIGN = "ASSIGN",
  VET_ATTENTION = "VET_ATTENTION",
  CUSTOMER_ATTENTION = "CUSTOMER_ATTENTION",
  ASSIGNED = "ASSIGNED",
  FULFILLED = "FULFILLED",
  DELETED = "DELETED",
  FRAUDULENT = "FRAUDULENT",
  EXPIRED = "EXPIRED",
  MERGED = "MERGED",
}


export type Files = {
  __typename: "Files",
  original?: string | null,
  small?: string | null,
  medium?: string | null,
  large?: string | null,
};

export type PmsUser = {
  __typename: "PmsUser",
  email: string,
  firstName?: string | null,
  lastName?: string | null,
};

export type Note = {
  __typename: "Note",
  PK?: string | null,
  id?: string | null,
  content: string,
  createdAt: string,
  createdBy: PmsUser,
  updatedAt?: string | null,
  updatedBy?: PmsUser | null,
  deletedAt?: string | null,
  deletedBy?: PmsUser | null,
};

export type PrescriptionItem = {
  __typename: "PrescriptionItem",
  productSku: string,
  productName: string,
  quantityPrescribed: number,
  repeatCount: number,
  quantityRemaining: number,
  validUntil: string,
  createdAt: string,
  createdBy: PmsUser,
  updatedAt: string,
  updatedBy: PmsUser,
};

export type PrescriptionOrderAssociation = {
  __typename: "PrescriptionOrderAssociation",
  orderIncrementId: string,
  orderStatus: OrderStatus,
  hasRefund: boolean,
  items?:  Array<OrderItemAssociation | null > | null,
};

export enum OrderStatus {
  PENDING_PRESCRIPTION_APPROVAL = "PENDING_PRESCRIPTION_APPROVAL",
  PENDING_LABELS = "PENDING_LABELS",
  LABELS_CREATED = "LABELS_CREATED",
  SENT_TO_OMS = "SENT_TO_OMS",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  ON_HOLD = "ON_HOLD",
  CANCELLED = "CANCELLED",
}


export type OrderItemAssociation = {
  __typename: "OrderItemAssociation",
  prescriptionId: string,
  sku: string,
  totalQtyOrdered: number,
  totalQtyRefunded?: number | null,
  prescriptionAllocated: number,
  prescriptionRefunded?: number | null,
  otherPrescriptionsUsed?:  Array<OtherPrescriptions | null > | null,
};

export type OtherPrescriptions = {
  __typename: "OtherPrescriptions",
  prescriptionId: string,
  prescriptionAllocated: number,
  prescriptionRefunded?: number | null,
};

export type CreateNoteInput = {
  prescriptionId: string,
  content: string,
  user: PmsUserInput,
};

export type DeleteNoteInput = {
  prescriptionId: string,
  noteId: string,
  user: PmsUserInput,
};

export type DeleteNoteMutationResponse = {
  __typename: "DeleteNoteMutationResponse",
  success: boolean,
  errorMessage?: string | null,
  details?: DeleteNote | null,
};

export type DeleteNote = {
  __typename: "DeleteNote",
  createdBy?: NullablePmsUser | null,
  deletedAt?: string | null,
};

export type NullablePmsUser = {
  __typename: "NullablePmsUser",
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type PrescriptionItemInput = {
  prescriptionId: string,
  productSku: string,
  productName: string,
  quantityPrescribed: number,
  repeatCount: number,
  validUntil: string,
  user: PmsUserInput,
  reason?: string | null,
};

export type DeletePrescriptionItemInput = {
  prescriptionId: string,
  itemSku: string,
  user?: PmsUserInput | null,
  reason?: string | null,
};

export type issuedByCvsVetInput = {
  prescriptionId: string,
  issuedByCvsVet: boolean,
  user: PmsUserInput,
};

export type vmdComplianceReviewInput = {
  prescriptionId: string,
  vmdComplianceReview: boolean,
  user: PmsUserInput,
};

export type UpdatePrescriptionValidityInput = {
  prescriptionId: string,
  validFrom: string,
  validUntil: string,
  user: PmsUserInput,
};

export type UpdatePrescriptionStatusInput = {
  prescriptionId: string,
  status: PrescriptionStatusEnum,
  user: PmsUserInput,
};

export type AssignCustomerInput = {
  prescriptionId: string,
  customer: CustomerInput,
  user: PmsUserInput,
};

export type CustomerInput = {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
};

export type RemoveCustomerInput = {
  prescriptionId: string,
  user: PmsUserInput,
};

export type UploadUrlResponse = {
  __typename: "UploadUrlResponse",
  url: string,
};

export type UpdatePrescriptionImageResponse = {
  __typename: "UpdatePrescriptionImageResponse",
  success: boolean,
  errorMessage?: string | null,
  files?:  Array<Files | null > | null,
};

export type RotatePrescriptionImageInput = {
  prescriptionId: string,
  fileIndex: number,
  degrees: number,
};

export type MergePrescriptionsInput = {
  sourcePrescriptionId: string,
  targetPrescriptionId: string,
  user: PmsUserInput,
};

export type UnMergePrescriptionImageInput = {
  prescriptionId: string,
  fileIndex: number,
  user: PmsUserInput,
};

export type OrderResendRequestMutationInput = {
  orderIncrementId: string,
  submit?: boolean | null,
  orderResend?: OrderResendInput | null,
  user: PmsUserInput,
};

export type OrderResendInput = {
  items?: Array< ResendItemInput | null > | null,
  reasonCode?: string | null,
  note?: string | null,
};

export type ResendItemInput = {
  sku: string,
  qty: number,
};

export type OrderResendRequestMutationResponse = {
  __typename: "OrderResendRequestMutationResponse",
  success: boolean,
  errorMessage?: string | null,
  details?: OrderResendResponse | null,
};

export type OrderResendResponse = {
  __typename: "OrderResendResponse",
  order?: Order | null,
  resendCodes?:  Array<ResendCode | null > | null,
  stockLevels?:  Array<StockLevel | null > | null,
};

export type Order = {
  __typename: "Order",
  incrementId?: string | null,
  PK?: string | null,
  entityStatus?: string | null,
  createdAt?: string | null,
  customerName: string,
  customerEmail: string,
  orderResendRequests?:  Array<OrderResendDetail | null > | null,
  prescriptionAssociations?:  Array<OrderPrescriptionAssociation | null > | null,
  items?:  Array<OrderItem | null > | null,
  holdReason?: string | null,
  heldBy?: PmsUser | null,
  heldOn?: string | null,
  orderComments?:  Array<OrderComment | null > | null,
};

export type OrderResendDetail = {
  __typename: "OrderResendDetail",
  entityStatus: OrderResendStatus,
  createdBy: PmsUser,
  createdAt: string,
  updatedBy?: PmsUser | null,
  updatedAt: string,
  deletedBy?: PmsUser | null,
  deletedAt: string,
  PK: string,
  SK: string,
  items?:  Array<ResendItem | null > | null,
  reasonCode?: string | null,
  note?: string | null,
  newOrderIncrementId?: string | null,
};

export enum OrderResendStatus {
  OPEN = "OPEN",
  DELETED = "DELETED",
  COMPLETE = "COMPLETE",
}


export type ResendItem = {
  __typename: "ResendItem",
  sku: string,
  qty: number,
};

export type OrderPrescriptionAssociation = {
  __typename: "OrderPrescriptionAssociation",
  SK: string,
  entityType?: string | null,
  createdAt?: string | null,
  items?:  Array<PrescriptionOrderAssociationItem | null > | null,
  prescription?: Prescription | null,
};

export type PrescriptionOrderAssociationItem = {
  __typename: "PrescriptionOrderAssociationItem",
  allocated: number,
  refunded?: number | null,
  prescriptionItem?: OrderToPrescriptionAssociationPrescriptionItem | null,
  sku: string,
};

export type OrderToPrescriptionAssociationPrescriptionItem = {
  __typename: "OrderToPrescriptionAssociationPrescriptionItem",
  PK?: string | null,
  SK?: string | null,
};

export type OrderItem = {
  __typename: "OrderItem",
  PK?: string | null,
  classification?: Classification | null,
  createdAt?: string | null,
  customerAssignedPetSnapshots?:  Array<Pet | null > | null,
  customerName?: string | null,
  customerEmail?: string | null,
  customerId?: number | null,
  customerNotes?:  Array<CustomerNote | null > | null,
  defaultLabel?: DefaultLabel | null,
  entityStatus?: string | null,
  incrementId?: string | null,
  itemId?: number | null,
  labels?:  Array<Label | null > | null,
  name?: string | null,
  prescriptionLinks?:  Array<Prescription | null > | null,
  priority?: boolean | null,
  qtyOrdered?: number | null,
  sku?: string | null,
  updatedAt?: string | null,
  labelsCreatedAt?: string | null,
  labelsCreatedBy?: PmsUser | null,
  labelsUpdatedAt?: string | null,
  labelsUpdatedBy?: PmsUser | null,
  labelsApprovedAt?: string | null,
  labelsApprovedBy?: PmsUser | null,
  customerAddressData?: PmsOrderCustomerData | null,
  magentoOrderEntityId?: number | null,
};

export enum Classification {
  PET_REG_REQUIRED = "PET_REG_REQUIRED",
  PRESCRIPTION_REQUIRED = "PRESCRIPTION_REQUIRED",
}


export type CustomerNote = {
  __typename: "CustomerNote",
  message?: string | null,
  messageId?: string | null,
  updatedAt?: string | null,
  user?: string | null,
};

export type DefaultLabel = {
  __typename: "DefaultLabel",
  conditional?: string | null,
  delivery?: string | null,
  frequency?: string | null,
  method?: string | null,
  prescriptionText?: string | null,
  prescriptionWarning?: string | null,
  quantity?: string | null,
  specific?: string | null,
  warnings?: string | null,
};

export type Label = {
  __typename: "Label",
  PK?: string | null,
  SK?: string | null,
  petUuids?: Array< string | null > | null,
  petNameAndSpecies?: Array< string | null > | null,
  conditional?: string | null,
  delivery?: string | null,
  frequency?: string | null,
  method?: string | null,
  prescriptionText?: string | null,
  prescriptionWarning?: string | null,
  pickQty?: string | null,
  quantity?: string | null,
  specific?: string | null,
  warnings?: string | null,
};

export type PmsOrderCustomerData = {
  __typename: "PmsOrderCustomerData",
  city?: string | null,
  firstname?: string | null,
  lastname?: string | null,
  street?: Array< string | null > | null,
  postcode?: string | null,
};

export type OrderComment = {
  __typename: "OrderComment",
  comment?: string | null,
  createdAt?: string | null,
};

export type ResendCode = {
  __typename: "ResendCode",
  name: string,
  description?: string | null,
  code: string,
};

export type StockLevel = {
  __typename: "StockLevel",
  sku?: string | null,
  availableQty?: number | null,
};

export type CreateOperatorMessageInput = {
  orderItemPk: string,
  userName: string,
  addressedTo: string,
  subject: string,
  content: string,
  sku: string,
  classification: Classification,
  newOrderItemStatus?: OperatorMessageOrderItemStatusInputEnum | null,
};

export enum OperatorMessageOrderItemStatusInputEnum {
  PENDING_LABELS = "PENDING_LABELS",
  SQP_QUERY = "SQP_QUERY",
  VET_ATTENTION = "VET_ATTENTION",
  LABELS_CREATED = "LABELS_CREATED",
}


export type DefaultLabelInput = {
  sku: string,
  conditional?: string | null,
  delivery?: string | null,
  frequency?: string | null,
  method?: string | null,
  quantity?: string | null,
  specific?: string | null,
  warnings?: string | null,
  prescriptionText?: string | null,
  prescriptionWarning?: string | null,
};

export type LabelInput = {
  petUuids: Array< string | null >,
  petNameAndSpecies: Array< string | null >,
  conditional?: string | null,
  delivery?: string | null,
  frequency?: string | null,
  quantity?: string | null,
  method?: string | null,
  pickQty?: number | null,
  specific?: string | null,
  warnings?: string | null,
  prescriptionText?: string | null,
  prescriptionWarning?: string | null,
};

export type CreateLabelMutationResponse = {
  __typename: "CreateLabelMutationResponse",
  success: boolean,
  errorMessage?: string | null,
  details?: OrderItem | null,
};

export type ChangeOrderStatusInput = {
  incrementId: string,
  status: OrderStatusChangeEnum,
  notes: string,
  user: PmsUserInput,
};

export enum OrderStatusChangeEnum {
  ON_HOLD = "ON_HOLD",
  PENDING_PRESCRIPTION_APPROVAL = "PENDING_PRESCRIPTION_APPROVAL",
}


export type PrescriptionInput = {
  id: string,
  user: PmsUserInput,
};

export type PrescriptionInputMutationResponse = {
  __typename: "PrescriptionInputMutationResponse",
  success: boolean,
  errorMessage?: string | null,
  details?: Prescription | null,
};

export type PrescriptionListResponse = {
  __typename: "PrescriptionListResponse",
  success: boolean,
  errorMessage?: string | null,
  items?:  Array<PrescriptionListItem | null > | null,
  totalCount?: number | null,
};

export type PrescriptionListItem = {
  __typename: "PrescriptionListItem",
  PK?: string | null,
  id?: string | null,
  orderIncrementId?: string | null,
  customer?: Customer | null,
  status?: PrescriptionStatusEnum | null,
  lastViewedBy?: PmsUser | null,
  lastViewedOn?: string | null,
  validFrom?: string | null,
  validUntil?: string | null,
  issuedByCvsVet?: boolean | null,
  approvedBy?: PmsUser | null,
  approvedOn?: string | null,
  createdAt: string,
  updatedAt?: string | null,
  notes?:  Array<Note | null > | null,
  consumedByOrderIds?: Array< string | null > | null,
  items?:  Array<PrescriptionItem | null > | null,
  vmdComplianceReview?: boolean | null,
};

export type CustomerPrescriptionOutput = {
  __typename: "CustomerPrescriptionOutput",
  approve?:  Array<Prescription | null > | null,
  assign?:  Array<Prescription | null > | null,
  assigned?:  Array<Prescription | null > | null,
  customerAttention?:  Array<Prescription | null > | null,
  vetAttention?:  Array<Prescription | null > | null,
  fulfilled?:  Array<Prescription | null > | null,
  deleted?:  Array<Prescription | null > | null,
  fraudulent?:  Array<Prescription | null > | null,
  expired?:  Array<Prescription | null > | null,
  merged?:  Array<Prescription | null > | null,
  imageGenerationFailed?:  Array<Prescription | null > | null,
};

export type CustomerListOutput = {
  __typename: "CustomerListOutput",
  customers?:  Array<CustomerSearchOutput | null > | null,
  totalCount?: number | null,
};

export type CustomerSearchOutput = {
  __typename: "CustomerSearchOutput",
  id?: number | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  pets?:  Array<Pet | null > | null,
  addresses?:  Array<AddressOutput | null > | null,
};

export type AddressOutput = {
  __typename: "AddressOutput",
  postcode?: string | null,
  street?: Array< string | null > | null,
};

export type ProductSearchListOutput = {
  __typename: "ProductSearchListOutput",
  items?:  Array<ProductSearchOutput | null > | null,
  totalCount?: number | null,
};

export type ProductSearchOutput = {
  __typename: "ProductSearchOutput",
  name: string,
  sku: string,
};

export type OrderAssignmentsOutput = {
  __typename: "OrderAssignmentsOutput",
  errorMessage?: string | null,
  orders?:  Array<OrderAssignments | null > | null,
};

export type OrderAssignments = {
  __typename: "OrderAssignments",
  entityType?: string | null,
  entityStatus?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  incrementId?: string | null,
  customerId?: number | null,
  items?:  Array<OrderItemAssignments | null > | null,
  canBeFulfilled?: boolean | null,
};

export type OrderItemAssignments = {
  __typename: "OrderItemAssignments",
  name?: string | null,
  qtyAssigned?: number | null,
  qtyOrdered?: number | null,
  sku?: string | null,
  customerAssignedPetSnapshots?:  Array<Pet | null > | null,
  assignments?:  Array<PrescriptionAssignment | null > | null,
};

export type PrescriptionAssignment = {
  __typename: "PrescriptionAssignment",
  quantityPrescribed?: number | null,
  repeatCount?: number | null,
  quantityRemaining?: number | null,
  createdAt?: string | null,
  productSku?: string | null,
  prescriptionId?: string | null,
};

export enum ListType {
  PRESCRIPTION = "PRESCRIPTION",
  NFA = "NFA",
  VETATTENTION = "VETATTENTION",
  SQPQUERY = "SQPQUERY",
}


export type LabelListOutput = {
  __typename: "LabelListOutput",
  items?:  Array<OrderItem | null > | null,
};

export type OperatorMessageList = {
  __typename: "OperatorMessageList",
  userName?: string | null,
  content?: string | null,
  addressedTo?: string | null,
  subject?: string | null,
  createdAt?: string | null,
};

export type ListOrdersByStatusOutput = {
  __typename: "ListOrdersByStatusOutput",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
  totalCount?: number | null,
};

export type OrderResendListDetail = {
  __typename: "OrderResendListDetail",
  orderIncrementId: string,
  orderDate: string,
  customerName?: string | null,
  entityStatus?: string | null,
  orderStatus?: string | null,
  PK: string,
  SK: string,
};

export type AmendPrescriptionItemMutationVariables = {
  data: AmendPrescriptionItemMutationInput,
};

export type AmendPrescriptionItemMutation = {
  amendPrescriptionItem:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type AmendPrescriptionValidityMutationVariables = {
  data: AmendPrescriptionValidityInput,
};

export type AmendPrescriptionValidityMutation = {
  amendPrescriptionValidity:  {
    __typename: "PrescriptionMutationResponse",
    success: boolean,
    errorMessage?: string | null,
    details?:  {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null,
  },
};

export type CreatePrescriptionNoteMutationVariables = {
  data: CreateNoteInput,
};

export type CreatePrescriptionNoteMutation = {
  createPrescriptionNote:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type DeletePrescriptionNoteMutationVariables = {
  data: DeleteNoteInput,
};

export type DeletePrescriptionNoteMutation = {
  deletePrescriptionNote:  {
    __typename: "DeleteNoteMutationResponse",
    success: boolean,
    errorMessage?: string | null,
    details?:  {
      __typename: "DeleteNote",
      deletedAt?: string | null,
    } | null,
  },
};

export type CreatePrescriptionItemMutationVariables = {
  data: PrescriptionItemInput,
};

export type CreatePrescriptionItemMutation = {
  createPrescriptionItem:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type DeletePrescriptionItemMutationVariables = {
  data: DeletePrescriptionItemInput,
};

export type DeletePrescriptionItemMutation = {
  deletePrescriptionItem:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type SwapPrescriptionItemSkuMutationVariables = {
  prescriptionId: string,
  oldSku: string,
  newSku: string,
  newProductName: string,
  user: PmsUserInput,
  reason: string,
};

export type SwapPrescriptionItemSkuMutation = {
  swapPrescriptionItemSku:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type UpdatePrescriptionIssuedByCvsVetMutationVariables = {
  data: issuedByCvsVetInput,
};

export type UpdatePrescriptionIssuedByCvsVetMutation = {
  updatePrescriptionIssuedByCvsVet:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type UpdatePrescriptionVmdComplianceReviewMutationVariables = {
  data: vmdComplianceReviewInput,
};

export type UpdatePrescriptionVmdComplianceReviewMutation = {
  updatePrescriptionVmdComplianceReview:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type UpdatePrescriptionValidityMutationVariables = {
  data: UpdatePrescriptionValidityInput,
};

export type UpdatePrescriptionValidityMutation = {
  updatePrescriptionValidity:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type UpdatePrescriptionStatusMutationVariables = {
  data: UpdatePrescriptionStatusInput,
};

export type UpdatePrescriptionStatusMutation = {
  updatePrescriptionStatus:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type AssignCustomerToPrescriptionMutationVariables = {
  data: AssignCustomerInput,
};

export type AssignCustomerToPrescriptionMutation = {
  assignCustomerToPrescription:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type ReassignCustomerOnPrescriptionMutationVariables = {
  data: AssignCustomerInput,
};

export type ReassignCustomerOnPrescriptionMutation = {
  reassignCustomerOnPrescription:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type RemoveCustomerFromPrescriptionMutationVariables = {
  data: RemoveCustomerInput,
};

export type RemoveCustomerFromPrescriptionMutation = {
  removeCustomerFromPrescription:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type CreateFileUploadUrlMutationVariables = {
  imageName?: string | null,
};

export type CreateFileUploadUrlMutation = {
  createFileUploadUrl:  {
    __typename: "UploadUrlResponse",
    url: string,
  },
};

export type RegeneratePrescriptionThumbnailsMutationVariables = {
  prescriptionId: string,
};

export type RegeneratePrescriptionThumbnailsMutation = {
  regeneratePrescriptionThumbnails:  {
    __typename: "UpdatePrescriptionImageResponse",
    success: boolean,
    errorMessage?: string | null,
    files?:  Array< {
      __typename: "Files",
      original?: string | null,
      small?: string | null,
      medium?: string | null,
      large?: string | null,
    } | null > | null,
  },
};

export type RotatePrescriptionImageMutationVariables = {
  data: RotatePrescriptionImageInput,
};

export type RotatePrescriptionImageMutation = {
  rotatePrescriptionImage:  {
    __typename: "UpdatePrescriptionImageResponse",
    success: boolean,
    errorMessage?: string | null,
    files?:  Array< {
      __typename: "Files",
      original?: string | null,
      small?: string | null,
      medium?: string | null,
      large?: string | null,
    } | null > | null,
  },
};

export type MergePrescriptionsMutationVariables = {
  data: MergePrescriptionsInput,
};

export type MergePrescriptionsMutation = {
  mergePrescriptions:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type UnmergePrescriptionImageMutationVariables = {
  data: UnMergePrescriptionImageInput,
};

export type UnmergePrescriptionImageMutation = {
  unmergePrescriptionImage:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type OrderResendRequestMutationVariables = {
  data?: OrderResendRequestMutationInput | null,
};

export type OrderResendRequestMutation = {
  orderResendRequest:  {
    __typename: "OrderResendRequestMutationResponse",
    success: boolean,
    errorMessage?: string | null,
    details?:  {
      __typename: "OrderResendResponse",
    } | null,
  },
};

export type DeleteOrderResendRequestMutationVariables = {
  orderIncrementId: string,
  resendRequestSk: string,
};

export type DeleteOrderResendRequestMutation = {
  deleteOrderResendRequest:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type CreateOperatorMessageMutationVariables = {
  data: CreateOperatorMessageInput,
};

export type CreateOperatorMessageMutation = {
  createOperatorMessage:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type CreateDefaultLabelMutationVariables = {
  data: DefaultLabelInput,
};

export type CreateDefaultLabelMutation = {
  createDefaultLabel:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type CreateLabelMutationVariables = {
  orderItemId: string,
  labelsLastUpdatedAt?: string | null,
  data: Array< LabelInput | null >,
  isApproved: boolean,
  user?: PmsUserInput | null,
};

export type CreateLabelMutation = {
  createLabel:  {
    __typename: "CreateLabelMutationResponse",
    success: boolean,
    errorMessage?: string | null,
    details?:  {
      __typename: "OrderItem",
      PK?: string | null,
      classification?: Classification | null,
      createdAt?: string | null,
      customerName?: string | null,
      customerEmail?: string | null,
      customerId?: number | null,
      entityStatus?: string | null,
      incrementId?: string | null,
      itemId?: number | null,
      name?: string | null,
      priority?: boolean | null,
      qtyOrdered?: number | null,
      sku?: string | null,
      updatedAt?: string | null,
      labelsCreatedAt?: string | null,
      labelsUpdatedAt?: string | null,
      labelsApprovedAt?: string | null,
      magentoOrderEntityId?: number | null,
    } | null,
  },
};

export type EditLabelAfterApprovalMutationVariables = {
  orderItemId: string,
  labelsLastUpdatedAt: string,
  data: Array< LabelInput | null >,
  user?: PmsUserInput | null,
};

export type EditLabelAfterApprovalMutation = {
  editLabelAfterApproval:  {
    __typename: "CreateLabelMutationResponse",
    success: boolean,
    errorMessage?: string | null,
    details?:  {
      __typename: "OrderItem",
      PK?: string | null,
      classification?: Classification | null,
      createdAt?: string | null,
      customerName?: string | null,
      customerEmail?: string | null,
      customerId?: number | null,
      entityStatus?: string | null,
      incrementId?: string | null,
      itemId?: number | null,
      name?: string | null,
      priority?: boolean | null,
      qtyOrdered?: number | null,
      sku?: string | null,
      updatedAt?: string | null,
      labelsCreatedAt?: string | null,
      labelsUpdatedAt?: string | null,
      labelsApprovedAt?: string | null,
      magentoOrderEntityId?: number | null,
    } | null,
  },
};

export type ChangeOrderStatusMutationVariables = {
  data: ChangeOrderStatusInput,
};

export type ChangeOrderStatusMutation = {
  changeOrderStatus:  {
    __typename: "MutationResponse",
    success: boolean,
    errorMessage?: string | null,
  },
};

export type PrescriptionMutationVariables = {
  data: PrescriptionInput,
};

export type PrescriptionMutation = {
  prescription:  {
    __typename: "PrescriptionInputMutationResponse",
    success: boolean,
    errorMessage?: string | null,
    details?:  {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null,
  },
};

export type PrescriptionsListQueryVariables = {
  status: PrescriptionStatusEnum,
};

export type PrescriptionsListQuery = {
  prescriptionsList?:  {
    __typename: "PrescriptionListResponse",
    success: boolean,
    errorMessage?: string | null,
    items?:  Array< {
      __typename: "PrescriptionListItem",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    totalCount?: number | null,
  } | null,
};

export type CustomerPrescriptionsQueryVariables = {
  customerId: string,
};

export type CustomerPrescriptionsQuery = {
  customerPrescriptions?:  {
    __typename: "CustomerPrescriptionOutput",
    approve?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    assign?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    assigned?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    customerAttention?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    vetAttention?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    fulfilled?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    deleted?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    fraudulent?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    expired?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    merged?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    imageGenerationFailed?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
  } | null,
};

export type CustomerSearchQueryVariables = {
  lastName?: string | null,
  email?: string | null,
};

export type CustomerSearchQuery = {
  customerSearch?:  {
    __typename: "CustomerListOutput",
    customers?:  Array< {
      __typename: "CustomerSearchOutput",
      id?: number | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
    } | null > | null,
    totalCount?: number | null,
  } | null,
};

export type ProductSearchQueryVariables = {
  searchString?: string | null,
};

export type ProductSearchQuery = {
  productSearch?:  {
    __typename: "ProductSearchListOutput",
    items?:  Array< {
      __typename: "ProductSearchOutput",
      name: string,
      sku: string,
    } | null > | null,
    totalCount?: number | null,
  } | null,
};

export type AssignPrescriptionsToOrdersDryRunQueryVariables = {
  prescriptionId: string,
};

export type AssignPrescriptionsToOrdersDryRunQuery = {
  assignPrescriptionsToOrdersDryRun?:  {
    __typename: "OrderAssignmentsOutput",
    errorMessage?: string | null,
    orders?:  Array< {
      __typename: "OrderAssignments",
      entityType?: string | null,
      entityStatus?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      incrementId?: string | null,
      customerId?: number | null,
      canBeFulfilled?: boolean | null,
    } | null > | null,
  } | null,
};

export type LabelListDataQueryVariables = {
  listType?: ListType | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LabelListDataQuery = {
  labelListData?:  {
    __typename: "LabelListOutput",
    items?:  Array< {
      __typename: "OrderItem",
      PK?: string | null,
      classification?: Classification | null,
      createdAt?: string | null,
      customerName?: string | null,
      customerEmail?: string | null,
      customerId?: number | null,
      entityStatus?: string | null,
      incrementId?: string | null,
      itemId?: number | null,
      name?: string | null,
      priority?: boolean | null,
      qtyOrdered?: number | null,
      sku?: string | null,
      updatedAt?: string | null,
      labelsCreatedAt?: string | null,
      labelsUpdatedAt?: string | null,
      labelsApprovedAt?: string | null,
      magentoOrderEntityId?: number | null,
    } | null > | null,
  } | null,
};

export type OperatorMessageListQueryVariables = {
  orderItemPk: string,
};

export type OperatorMessageListQuery = {
  operatorMessageList?:  Array< {
    __typename: "OperatorMessageList",
    userName?: string | null,
    content?: string | null,
    addressedTo?: string | null,
    subject?: string | null,
    createdAt?: string | null,
  } | null > | null,
};

export type OrderItemLabelDataQueryVariables = {
  PK: string,
};

export type OrderItemLabelDataQuery = {
  orderItemLabelData?:  {
    __typename: "OrderItem",
    PK?: string | null,
    classification?: Classification | null,
    createdAt?: string | null,
    customerAssignedPetSnapshots?:  Array< {
      __typename: "Pet",
      uuid: string,
      customerId: number,
      farmGate?: boolean | null,
      gender?: string | null,
      species?: string | null,
      weight?: number | null,
      foodChain?: boolean | null,
      cphNumber?: number | null,
      accountType?: string | null,
      active?: boolean | null,
      medication?: boolean | null,
      name?: string | null,
      healthy?: boolean | null,
      medicationNotes?: string | null,
      foodUse?: Array< string | null > | null,
      pregnant?: boolean | null,
      dob?: string | null,
      healthNotes?: string | null,
      count?: number | null,
      passport?: string | null,
      tags?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null > | null,
    customerName?: string | null,
    customerEmail?: string | null,
    customerId?: number | null,
    customerNotes?:  Array< {
      __typename: "CustomerNote",
      message?: string | null,
      messageId?: string | null,
      updatedAt?: string | null,
      user?: string | null,
    } | null > | null,
    defaultLabel?:  {
      __typename: "DefaultLabel",
      conditional?: string | null,
      delivery?: string | null,
      frequency?: string | null,
      method?: string | null,
      prescriptionText?: string | null,
      prescriptionWarning?: string | null,
      quantity?: string | null,
      specific?: string | null,
      warnings?: string | null,
    } | null,
    entityStatus?: string | null,
    incrementId?: string | null,
    itemId?: number | null,
    labels?:  Array< {
      __typename: "Label",
      PK?: string | null,
      SK?: string | null,
      petUuids?: Array< string | null > | null,
      petNameAndSpecies?: Array< string | null > | null,
      conditional?: string | null,
      delivery?: string | null,
      frequency?: string | null,
      method?: string | null,
      prescriptionText?: string | null,
      prescriptionWarning?: string | null,
      pickQty?: string | null,
      quantity?: string | null,
      specific?: string | null,
      warnings?: string | null,
    } | null > | null,
    name?: string | null,
    prescriptionLinks?:  Array< {
      __typename: "Prescription",
      PK?: string | null,
      id?: string | null,
      orderIncrementId?: string | null,
      status?: PrescriptionStatusEnum | null,
      lastViewedOn?: string | null,
      validFrom?: string | null,
      validUntil?: string | null,
      issuedByCvsVet?: boolean | null,
      approvedOn?: string | null,
      createdAt: string,
      updatedAt?: string | null,
      consumedByOrderIds?: Array< string | null > | null,
      vmdComplianceReview?: boolean | null,
    } | null > | null,
    priority?: boolean | null,
    qtyOrdered?: number | null,
    sku?: string | null,
    updatedAt?: string | null,
    labelsCreatedAt?: string | null,
    labelsCreatedBy?:  {
      __typename: "PmsUser",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
    } | null,
    labelsUpdatedAt?: string | null,
    labelsUpdatedBy?:  {
      __typename: "PmsUser",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
    } | null,
    labelsApprovedAt?: string | null,
    labelsApprovedBy?:  {
      __typename: "PmsUser",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
    } | null,
    customerAddressData?:  {
      __typename: "PmsOrderCustomerData",
      city?: string | null,
      firstname?: string | null,
      lastname?: string | null,
      street?: Array< string | null > | null,
      postcode?: string | null,
    } | null,
    magentoOrderEntityId?: number | null,
  } | null,
};

export type OrderCommentsListQueryVariables = {
  magentoEntityId: number,
};

export type OrderCommentsListQuery = {
  orderCommentsList?:  Array< {
    __typename: "OrderComment",
    comment?: string | null,
    createdAt?: string | null,
  } | null > | null,
};

export type GetDefaultLabelQueryVariables = {
  sku: string,
};

export type GetDefaultLabelQuery = {
  getDefaultLabel?:  {
    __typename: "DefaultLabel",
    conditional?: string | null,
    delivery?: string | null,
    frequency?: string | null,
    method?: string | null,
    prescriptionText?: string | null,
    prescriptionWarning?: string | null,
    quantity?: string | null,
    specific?: string | null,
    warnings?: string | null,
  } | null,
};

export type SearchOrderIdQueryVariables = {
  orderId: string,
};

export type SearchOrderIdQuery = {
  searchOrderId?:  {
    __typename: "Order",
    incrementId?: string | null,
    PK?: string | null,
    entityStatus?: string | null,
    createdAt?: string | null,
    customerName: string,
    customerEmail: string,
    orderResendRequests?:  Array< {
      __typename: "OrderResendDetail",
      entityStatus: OrderResendStatus,
      createdAt: string,
      updatedAt: string,
      deletedAt: string,
      PK: string,
      SK: string,
      reasonCode?: string | null,
      note?: string | null,
      newOrderIncrementId?: string | null,
    } | null > | null,
    prescriptionAssociations?:  Array< {
      __typename: "OrderPrescriptionAssociation",
      SK: string,
      entityType?: string | null,
      createdAt?: string | null,
    } | null > | null,
    items?:  Array< {
      __typename: "OrderItem",
      PK?: string | null,
      classification?: Classification | null,
      createdAt?: string | null,
      customerName?: string | null,
      customerEmail?: string | null,
      customerId?: number | null,
      entityStatus?: string | null,
      incrementId?: string | null,
      itemId?: number | null,
      name?: string | null,
      priority?: boolean | null,
      qtyOrdered?: number | null,
      sku?: string | null,
      updatedAt?: string | null,
      labelsCreatedAt?: string | null,
      labelsUpdatedAt?: string | null,
      labelsApprovedAt?: string | null,
      magentoOrderEntityId?: number | null,
    } | null > | null,
    holdReason?: string | null,
    heldBy?:  {
      __typename: "PmsUser",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
    } | null,
    heldOn?: string | null,
    orderComments?:  Array< {
      __typename: "OrderComment",
      comment?: string | null,
      createdAt?: string | null,
    } | null > | null,
  } | null,
};

export type ListOrdersByStatusQueryVariables = {
  status: OrderStatus,
};

export type ListOrdersByStatusQuery = {
  listOrdersByStatus?:  {
    __typename: "ListOrdersByStatusOutput",
    items?:  Array< {
      __typename: "Order",
      incrementId?: string | null,
      PK?: string | null,
      entityStatus?: string | null,
      createdAt?: string | null,
      customerName: string,
      customerEmail: string,
      holdReason?: string | null,
      heldOn?: string | null,
    } | null > | null,
    nextToken?: string | null,
    totalCount?: number | null,
  } | null,
};

export type OrderResendRequestListQueryVariables = {
  orderResendStatus: OrderResendStatus,
};

export type OrderResendRequestListQuery = {
  orderResendRequestList?:  Array< {
    __typename: "OrderResendListDetail",
    orderIncrementId: string,
    orderDate: string,
    customerName?: string | null,
    entityStatus?: string | null,
    orderStatus?: string | null,
    PK: string,
    SK: string,
  } | null > | null,
};

export type PrescriptionNotesQueryVariables = {
  prescriptionPk: string,
};

export type PrescriptionNotesQuery = {
  prescriptionNotes?:  Array< {
    __typename: "Note",
    PK?: string | null,
    id?: string | null,
    content: string,
    createdAt: string,
    createdBy:  {
      __typename: "PmsUser",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
    },
    updatedAt?: string | null,
    updatedBy?:  {
      __typename: "PmsUser",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
    } | null,
    deletedAt?: string | null,
    deletedBy?:  {
      __typename: "PmsUser",
      email: string,
      firstName?: string | null,
      lastName?: string | null,
    } | null,
  } | null > | null,
};

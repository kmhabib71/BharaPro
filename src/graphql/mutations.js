/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      email
      name
      referrCode
      mobile
      location
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      email
      name
      referrCode
      mobile
      location
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      email
      name
      referrCode
      mobile
      location
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
      id
      title
      category
      description
      images
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
      id
      title
      category
      description
      images
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
      id
      title
      category
      description
      images
      value
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      advId
      borrowerUserId
      lenderUserId
      hourValue
      dailyValue
      weekValue
      monthValue
      daterange
      orderStatus
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      advId
      borrowerUserId
      lenderUserId
      hourValue
      dailyValue
      weekValue
      monthValue
      daterange
      orderStatus
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      advId
      borrowerUserId
      lenderUserId
      hourValue
      dailyValue
      weekValue
      monthValue
      daterange
      orderStatus
      createdAt
      updatedAt
    }
  }
`;
export const createMessages = /* GraphQL */ `
  mutation CreateMessages(
    $input: CreateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    createMessages(input: $input, condition: $condition) {
      id
      text
      advId
      messageSenders
      messageReceiver
      createdAt
      updatedAt
    }
  }
`;
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages(
    $input: UpdateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    updateMessages(input: $input, condition: $condition) {
      id
      text
      advId
      messageSenders
      messageReceiver
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages(
    $input: DeleteMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    deleteMessages(input: $input, condition: $condition) {
      id
      text
      advId
      messageSenders
      messageReceiver
      createdAt
      updatedAt
    }
  }
`;
export const createAllverification = /* GraphQL */ `
  mutation CreateAllverification(
    $input: CreateAllverificationInput!
    $condition: ModelAllverificationConditionInput
  ) {
    createAllverification(input: $input, condition: $condition) {
      id
      userid
      phonoVerification
      idcard
      createdAt
      updatedAt
    }
  }
`;
export const updateAllverification = /* GraphQL */ `
  mutation UpdateAllverification(
    $input: UpdateAllverificationInput!
    $condition: ModelAllverificationConditionInput
  ) {
    updateAllverification(input: $input, condition: $condition) {
      id
      userid
      phonoVerification
      idcard
      createdAt
      updatedAt
    }
  }
`;
export const deleteAllverification = /* GraphQL */ `
  mutation DeleteAllverification(
    $input: DeleteAllverificationInput!
    $condition: ModelAllverificationConditionInput
  ) {
    deleteAllverification(input: $input, condition: $condition) {
      id
      userid
      phonoVerification
      idcard
      createdAt
      updatedAt
    }
  }
`;
export const createPhoneVerification = /* GraphQL */ `
  mutation CreatePhoneVerification(
    $input: CreatePhoneVerificationInput!
    $condition: ModelPhoneVerificationConditionInput
  ) {
    createPhoneVerification(input: $input, condition: $condition) {
      id
      userid
      phonoVerificationCode
      PhoneVerificationStatus
      createdAt
      updatedAt
    }
  }
`;
export const updatePhoneVerification = /* GraphQL */ `
  mutation UpdatePhoneVerification(
    $input: UpdatePhoneVerificationInput!
    $condition: ModelPhoneVerificationConditionInput
  ) {
    updatePhoneVerification(input: $input, condition: $condition) {
      id
      userid
      phonoVerificationCode
      PhoneVerificationStatus
      createdAt
      updatedAt
    }
  }
`;
export const deletePhoneVerification = /* GraphQL */ `
  mutation DeletePhoneVerification(
    $input: DeletePhoneVerificationInput!
    $condition: ModelPhoneVerificationConditionInput
  ) {
    deletePhoneVerification(input: $input, condition: $condition) {
      id
      userid
      phonoVerificationCode
      PhoneVerificationStatus
      createdAt
      updatedAt
    }
  }
`;
export const createIdcardVerification = /* GraphQL */ `
  mutation CreateIdcardVerification(
    $input: CreateIdcardVerificationInput!
    $condition: ModelIdcardVerificationConditionInput
  ) {
    createIdcardVerification(input: $input, condition: $condition) {
      id
      userid
      idFront
      idBack
      userImage
      idCardStatus
      createdAt
      updatedAt
    }
  }
`;
export const updateIdcardVerification = /* GraphQL */ `
  mutation UpdateIdcardVerification(
    $input: UpdateIdcardVerificationInput!
    $condition: ModelIdcardVerificationConditionInput
  ) {
    updateIdcardVerification(input: $input, condition: $condition) {
      id
      userid
      idFront
      idBack
      userImage
      idCardStatus
      createdAt
      updatedAt
    }
  }
`;
export const deleteIdcardVerification = /* GraphQL */ `
  mutation DeleteIdcardVerification(
    $input: DeleteIdcardVerificationInput!
    $condition: ModelIdcardVerificationConditionInput
  ) {
    deleteIdcardVerification(input: $input, condition: $condition) {
      id
      userid
      idFront
      idBack
      userImage
      idCardStatus
      createdAt
      updatedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      division
      district
      thana
      area
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      division
      district
      thana
      area
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      division
      district
      thana
      area
      createdAt
      updatedAt
    }
  }
`;
export const createSupport = /* GraphQL */ `
  mutation CreateSupport(
    $input: CreateSupportInput!
    $condition: ModelSupportConditionInput
  ) {
    createSupport(input: $input, condition: $condition) {
      id
      supportUserId
      supportUserText
      createdAt
      updatedAt
    }
  }
`;
export const updateSupport = /* GraphQL */ `
  mutation UpdateSupport(
    $input: UpdateSupportInput!
    $condition: ModelSupportConditionInput
  ) {
    updateSupport(input: $input, condition: $condition) {
      id
      supportUserId
      supportUserText
      createdAt
      updatedAt
    }
  }
`;
export const deleteSupport = /* GraphQL */ `
  mutation DeleteSupport(
    $input: DeleteSupportInput!
    $condition: ModelSupportConditionInput
  ) {
    deleteSupport(input: $input, condition: $condition) {
      id
      supportUserId
      supportUserText
      createdAt
      updatedAt
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        referrCode
        mobile
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
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
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        category
        description
        images
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!) {
    getMessages(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        advId
        messageSenders
        messageReceiver
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAllverification = /* GraphQL */ `
  query GetAllverification($id: ID!) {
    getAllverification(id: $id) {
      id
      userid
      phonoVerification
      idcard
      createdAt
      updatedAt
    }
  }
`;
export const listAllverifications = /* GraphQL */ `
  query ListAllverifications(
    $filter: ModelAllverificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAllverifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userid
        phonoVerification
        idcard
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPhoneVerification = /* GraphQL */ `
  query GetPhoneVerification($id: ID!) {
    getPhoneVerification(id: $id) {
      id
      userid
      phonoVerificationCode
      PhoneVerificationStatus
      createdAt
      updatedAt
    }
  }
`;
export const listPhoneVerifications = /* GraphQL */ `
  query ListPhoneVerifications(
    $filter: ModelPhoneVerificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhoneVerifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userid
        phonoVerificationCode
        PhoneVerificationStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIdcardVerification = /* GraphQL */ `
  query GetIdcardVerification($id: ID!) {
    getIdcardVerification(id: $id) {
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
export const listIdcardVerifications = /* GraphQL */ `
  query ListIdcardVerifications(
    $filter: ModelIdcardVerificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdcardVerifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userid
        idFront
        idBack
        userImage
        idCardStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        division
        district
        thana
        area
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSupport = /* GraphQL */ `
  query GetSupport($id: ID!) {
    getSupport(id: $id) {
      id
      supportUserId
      supportUserText
      createdAt
      updatedAt
    }
  }
`;
export const listSupports = /* GraphQL */ `
  query ListSupports(
    $filter: ModelSupportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        supportUserId
        supportUserText
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      category
      createdAt
      updatedAt
    }
  }
`;
export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing {
    onCreateListing {
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
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing {
    onUpdateListing {
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
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing {
    onDeleteListing {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages {
    onCreateMessages {
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
export const onUpdateMessages = /* GraphQL */ `
  subscription OnUpdateMessages {
    onUpdateMessages {
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
export const onDeleteMessages = /* GraphQL */ `
  subscription OnDeleteMessages {
    onDeleteMessages {
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
export const onCreateAllverification = /* GraphQL */ `
  subscription OnCreateAllverification {
    onCreateAllverification {
      id
      userid
      phonoVerification
      idcard
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAllverification = /* GraphQL */ `
  subscription OnUpdateAllverification {
    onUpdateAllverification {
      id
      userid
      phonoVerification
      idcard
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAllverification = /* GraphQL */ `
  subscription OnDeleteAllverification {
    onDeleteAllverification {
      id
      userid
      phonoVerification
      idcard
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePhoneVerification = /* GraphQL */ `
  subscription OnCreatePhoneVerification {
    onCreatePhoneVerification {
      id
      userid
      phonoVerificationCode
      PhoneVerificationStatus
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePhoneVerification = /* GraphQL */ `
  subscription OnUpdatePhoneVerification {
    onUpdatePhoneVerification {
      id
      userid
      phonoVerificationCode
      PhoneVerificationStatus
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePhoneVerification = /* GraphQL */ `
  subscription OnDeletePhoneVerification {
    onDeletePhoneVerification {
      id
      userid
      phonoVerificationCode
      PhoneVerificationStatus
      createdAt
      updatedAt
    }
  }
`;
export const onCreateIdcardVerification = /* GraphQL */ `
  subscription OnCreateIdcardVerification {
    onCreateIdcardVerification {
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
export const onUpdateIdcardVerification = /* GraphQL */ `
  subscription OnUpdateIdcardVerification {
    onUpdateIdcardVerification {
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
export const onDeleteIdcardVerification = /* GraphQL */ `
  subscription OnDeleteIdcardVerification {
    onDeleteIdcardVerification {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateSupport = /* GraphQL */ `
  subscription OnCreateSupport {
    onCreateSupport {
      id
      supportUserId
      supportUserText
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSupport = /* GraphQL */ `
  subscription OnUpdateSupport {
    onUpdateSupport {
      id
      supportUserId
      supportUserText
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSupport = /* GraphQL */ `
  subscription OnDeleteSupport {
    onDeleteSupport {
      id
      supportUserId
      supportUserText
      createdAt
      updatedAt
    }
  }
`;

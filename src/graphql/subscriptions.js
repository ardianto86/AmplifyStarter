/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      name
      where
      when
      description
      eventStatus
      capacity
      participants {
        items {
          id
          userID
          username
          fullname
          dateOfBirth
        }
        nextToken
      }
      comments {
        items {
          id
          commentID
          content
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      name
      where
      when
      description
      eventStatus
      capacity
      participants {
        items {
          id
          userID
          username
          fullname
          dateOfBirth
        }
        nextToken
      }
      comments {
        items {
          id
          commentID
          content
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      name
      where
      when
      description
      eventStatus
      capacity
      participants {
        items {
          id
          userID
          username
          fullname
          dateOfBirth
        }
        nextToken
      }
      comments {
        items {
          id
          commentID
          content
          createdAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      commentID
      content
      createdAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      commentID
      content
      createdAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      commentID
      content
      createdAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      userID
      username
      fullname
      dateOfBirth
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      userID
      username
      fullname
      dateOfBirth
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      userID
      username
      fullname
      dateOfBirth
    }
  }
`;

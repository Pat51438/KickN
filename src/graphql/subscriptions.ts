/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    firstName
    lastName
    DOB
    email
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    firstName
    lastName
    DOB
    email
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    firstName
    lastName
    DOB
    email
    events {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
    id
    user {
      id
      firstName
      lastName
      DOB
      email
      createdAt
      updatedAt
      __typename
    }
    activity
    locationID
    location {
      id
      latitude
      longitude
      createdAt
      updatedAt
      locationEventId
      __typename
    }
    date
    time
    createdAt
    updatedAt
    userEventsId
    eventLocationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
    id
    user {
      id
      firstName
      lastName
      DOB
      email
      createdAt
      updatedAt
      __typename
    }
    activity
    locationID
    location {
      id
      latitude
      longitude
      createdAt
      updatedAt
      locationEventId
      __typename
    }
    date
    time
    createdAt
    updatedAt
    userEventsId
    eventLocationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
    id
    user {
      id
      firstName
      lastName
      DOB
      email
      createdAt
      updatedAt
      __typename
    }
    activity
    locationID
    location {
      id
      latitude
      longitude
      createdAt
      updatedAt
      locationEventId
      __typename
    }
    date
    time
    createdAt
    updatedAt
    userEventsId
    eventLocationId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateLocation = /* GraphQL */ `subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
  onCreateLocation(filter: $filter) {
    id
    event {
      id
      activity
      locationID
      date
      time
      createdAt
      updatedAt
      userEventsId
      eventLocationId
      __typename
    }
    latitude
    longitude
    createdAt
    updatedAt
    locationEventId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLocationSubscriptionVariables,
  APITypes.OnCreateLocationSubscription
>;
export const onUpdateLocation = /* GraphQL */ `subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
  onUpdateLocation(filter: $filter) {
    id
    event {
      id
      activity
      locationID
      date
      time
      createdAt
      updatedAt
      userEventsId
      eventLocationId
      __typename
    }
    latitude
    longitude
    createdAt
    updatedAt
    locationEventId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLocationSubscriptionVariables,
  APITypes.OnUpdateLocationSubscription
>;
export const onDeleteLocation = /* GraphQL */ `subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
  onDeleteLocation(filter: $filter) {
    id
    event {
      id
      activity
      locationID
      date
      time
      createdAt
      updatedAt
      userEventsId
      eventLocationId
      __typename
    }
    latitude
    longitude
    createdAt
    updatedAt
    locationEventId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLocationSubscriptionVariables,
  APITypes.OnDeleteLocationSubscription
>;

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createLocation = /* GraphQL */ `mutation CreateLocation(
  $input: CreateLocationInput!
  $condition: ModelLocationConditionInput
) {
  createLocation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLocationMutationVariables,
  APITypes.CreateLocationMutation
>;
export const updateLocation = /* GraphQL */ `mutation UpdateLocation(
  $input: UpdateLocationInput!
  $condition: ModelLocationConditionInput
) {
  updateLocation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLocationMutationVariables,
  APITypes.UpdateLocationMutation
>;
export const deleteLocation = /* GraphQL */ `mutation DeleteLocation(
  $input: DeleteLocationInput!
  $condition: ModelLocationConditionInput
) {
  deleteLocation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLocationMutationVariables,
  APITypes.DeleteLocationMutation
>;

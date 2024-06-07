/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      DOB
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
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
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const getLocation = /* GraphQL */ `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLocationQueryVariables,
  APITypes.GetLocationQuery
>;
export const listLocations = /* GraphQL */ `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      latitude
      longitude
      createdAt
      updatedAt
      locationEventId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLocationsQueryVariables,
  APITypes.ListLocationsQuery
>;

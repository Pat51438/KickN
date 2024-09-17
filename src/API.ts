/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  DOB: string,
  email: string,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  DOB?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  DOB: string,
  email: string,
  events?: ModelEventConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  user?: User | null,
  activity: string,
  locationID: string,
  location?: Location | null,
  date: string,
  time: string,
  createdAt: string,
  updatedAt: string,
  userEventsId: string,
  eventLocationId?: string | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  event?: Event | null,
  latitude: number,
  longitude: number,
  createdAt: string,
  updatedAt: string,
  locationEventId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  DOB?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  activity: string,
  locationID: string,
  date: string,
  time: string,
  userEventsId: string,
  eventLocationId?: string | null,
};

export type ModelEventConditionInput = {
  activity?: ModelStringInput | null,
  locationID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userEventsId?: ModelIDInput | null,
  eventLocationId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateEventInput = {
  id: string,
  activity?: string | null,
  locationID?: string | null,
  date?: string | null,
  time?: string | null,
  userEventsId?: string | null,
  eventLocationId?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateLocationInput = {
  id?: string | null,
  latitude: number,
  longitude: number,
  locationEventId?: string | null,
};

export type ModelLocationConditionInput = {
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  locationEventId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLocationInput = {
  id: string,
  latitude?: number | null,
  longitude?: number | null,
  locationEventId?: string | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  DOB?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  activity?: ModelStringInput | null,
  locationID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  time?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  userEventsId?: ModelIDInput | null,
  eventLocationId?: ModelIDInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
  locationEventId?: ModelIDInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  DOB?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userEventsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  activity?: ModelSubscriptionStringInput | null,
  locationID?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  time?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
  eventLocationId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  locationEventId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    activity: string,
    locationID: string,
    location?:  {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null,
    date: string,
    time: string,
    createdAt: string,
    updatedAt: string,
    userEventsId: string,
    eventLocationId?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    activity: string,
    locationID: string,
    location?:  {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null,
    date: string,
    time: string,
    createdAt: string,
    updatedAt: string,
    userEventsId: string,
    eventLocationId?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    activity: string,
    locationID: string,
    location?:  {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null,
    date: string,
    time: string,
    createdAt: string,
    updatedAt: string,
    userEventsId: string,
    eventLocationId?: string | null,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
    locationEventId?: string | null,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
    locationEventId?: string | null,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
    locationEventId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    activity: string,
    locationID: string,
    location?:  {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null,
    date: string,
    time: string,
    createdAt: string,
    updatedAt: string,
    userEventsId: string,
    eventLocationId?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
    locationEventId?: string | null,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    DOB: string,
    email: string,
    events?:  {
      __typename: "ModelEventConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    activity: string,
    locationID: string,
    location?:  {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null,
    date: string,
    time: string,
    createdAt: string,
    updatedAt: string,
    userEventsId: string,
    eventLocationId?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    activity: string,
    locationID: string,
    location?:  {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null,
    date: string,
    time: string,
    createdAt: string,
    updatedAt: string,
    userEventsId: string,
    eventLocationId?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      DOB: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    activity: string,
    locationID: string,
    location?:  {
      __typename: "Location",
      id: string,
      latitude: number,
      longitude: number,
      createdAt: string,
      updatedAt: string,
      locationEventId?: string | null,
    } | null,
    date: string,
    time: string,
    createdAt: string,
    updatedAt: string,
    userEventsId: string,
    eventLocationId?: string | null,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
    locationEventId?: string | null,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
    locationEventId?: string | null,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    event?:  {
      __typename: "Event",
      id: string,
      activity: string,
      locationID: string,
      date: string,
      time: string,
      createdAt: string,
      updatedAt: string,
      userEventsId: string,
      eventLocationId?: string | null,
    } | null,
    latitude: number,
    longitude: number,
    createdAt: string,
    updatedAt: string,
    locationEventId?: string | null,
  } | null,
};

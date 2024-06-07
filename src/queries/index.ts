// src/queries/index.ts
import { gql } from '@apollo/client';

export const GET_USER_EVENTS = gql`
    query GetUserEvents($userId: ID!) {
        User(id: $userId) {
            id
            firstName
            lastName
            Event {
                id
                activity
                date
                time
                location{
                    id
                    name
                    latitude
                    longitude
                }
                
            }
        }
    }
`;

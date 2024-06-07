const asyncHandler = require("express-async-handler");
const {graphQLQuery} = require("../helpers/graphQLQuery");

const executeQuery = async (query, dataObject, variables, req, res) => {
    console.log(req.query)
    const response = await graphQLQuery(
        query, variables,
    );


    if (response.data.errors) {
        console.log(response.data.errors);

        return res.json({
            errors: response.data.errors
        })
    }
    console.log(response.data.data)
    res.json({
        data: response.data.data[dataObject],
        body: req.body
    });
}

exports.event_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `query GetEvent($id: ID!) {
            getEvent(id: $id) {
            activity
            date
            id
            location
            time
            }
        }`,
        "getEvent",
        {id: req.params.id},
        req, res);
});


// Handle book create on POST.
exports.event_create = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `mutation MyMutation($id: ID!, $activity: String, $location: String, $date: String, $time: String) {
  createEvent(input: {
  id: ID!
  activity: $activity
  date: $date
  time: $time
  location: $location
   }) {
   id
   location
   activity
    date
    time
  }
}`,
        "createEvent",
        {
            activity: req.body.activity,
            location: req.body.location,
            id: req.body.id,
            date: req.body.date,
            time: req.body.time
        },
        req, res);
});

exports.event_list = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `query MyQuery{
              listEvents {
                items {
                    activity
                    date
                    id
                    location
                    time
                    _version
                    _deleted
                }
              }
            }
    `, "listEvents",
        {id: req.params.id},
        req, res)
})

exports.event_update = asyncHandler(async (req, res, next) => {
    await executeQuery

    (
        `mutation MyMutation($id: ID!, $activity: String, $location: String, $date: String, $time: String, $_version: Int) {
  updateEvent(input: {
                    activity
                    date
                    id
                    location
                    time
                    _version
  }
}`,
        "updateEvent",
        {
            activity: req.body.activity,
            location: req.body.location,
            id: req.body.id,
            date: req.body.date,
            time: req.body.time,
            _version: req.body._version
        },
        req, res);
})

exports.event_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `mutation MyMutation($id: ID!) {
            deleteEvent(input: {id: $id}) {
              activity
              date
              id
              location
              time
            }
        }`,
        "deleteEvent",
        {id: req.params.id},
        req, res);
})
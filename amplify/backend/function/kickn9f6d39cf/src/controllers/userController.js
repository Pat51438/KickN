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

exports.user_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `query GetUser($id: ID!) {
            getUser(id: $id) {
             DOB
             firstName
             id
             lastName
            }
        }`,
        "getUser",
        {id: req.params.id},
        req, res);
});


// Handle book create on POST.
exports.user_create = asyncHandler(async (req, res, next) => {
    console.log(req.body)
    await executeQuery(
        `mutation MyMutation($id: ID!, $firstName: String, $lastName: String, $DOB: String) {
  createUser(input: {
  id: ID!
  firstName: $firstName
  lastName: $lastName
  DOB: $DOB
   }) {
   id
   firstName
   lastName
    DOB
  }
}`,
        "createUser",
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            id: req.body.id,
            DOB: req.body.DOB
        },
        req, res);
});

exports.user_list = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `query MyQuery{
              listUsers {
                items {
                    firstName
                    lastName
                    id
                    DOB
                  _version
                  _deleted
                }
              }
            }
    `, "listUsers",
        {id: req.params.id},
        req, res)
})

exports.user_update = asyncHandler(async (req, res, next) => {
    await executeQuery

    (
        `mutation MyMutation($id: ID!, $firstName: String, $lastName: String, $DOB: String, $_version: Int) {
  updateUser(input: {
     firstName
    lastName
    id
    DOB
    _version
  }
}`,
        "updateUser",
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            id: req.body.id,
            DOB: req.body.DOB,
            _version: req.body._version
        },
        req, res);
})

exports.user_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(
        `mutation MyMutation($id: ID!) {
            deleteUser(input: {id: $id}) {
               DOB
               firstName
               id
               lastName
            }
        }`,
        "deleteUser",
        {id: req.params.id},
        req, res);
})
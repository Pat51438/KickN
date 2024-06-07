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
             email
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
        `mutation MyMutation($id: ID!, $firstName: String, $lastName: String, $DOB: String, $email: String) {
  createUser(input: {
  id: ID!
  firstName: $firstName
  lastName: $lastName
  DOB: $DOB
  email: $email
   }) {
   id
   firstName
   lastName
    DOB
    email
  }
}`,
        "createUser",
        {id: req.body.id,
          ...req.body
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
                    email
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
        `mutation MyMutation($id: ID!, $firstName: String, $lastName: String, $DOB: String, $email: String, $_version: Int) {
  updateUser(input: {
     firstName
    lastName
    id
    DOB
    email
    _version
  }
}`,
        "updateUser",
        {id: req.body.id,
            ...req.body
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
               email
            }
        }`,
        "deleteUser",
        {id: req.params.id},
        req, res);
})
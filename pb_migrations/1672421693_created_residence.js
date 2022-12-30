migrate((db) => {
  const collection = new Collection({
    "id": "blu4ejrd5opktz9",
    "created": "2022-12-30 17:34:53.988Z",
    "updated": "2022-12-30 17:34:53.988Z",
    "name": "residence",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xutbqjjv",
        "name": "address",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ohzb2fsd",
        "name": "rent",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "cw6sgiv3",
        "name": "renters",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": null,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("blu4ejrd5opktz9");

  return dao.deleteCollection(collection);
})

migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("blu4ejrd5opktz9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evtrkvud",
    "name": "documents",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("blu4ejrd5opktz9")

  // remove
  collection.schema.removeField("evtrkvud")

  return dao.saveCollection(collection)
})

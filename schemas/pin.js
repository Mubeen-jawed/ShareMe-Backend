export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      option: {
        hotspot: true
      }
    },
    {
      name: "category",
      title: "Category",
      type: "string"
    },
    {
      name: "destination",
      title: "Destination",
      type: "url"
    },
    {
      name: "userid",
      title: "UserId",
      type: "string"
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy"
    },
    {
      name: "save",
      title: "Save",
      type: "array",
      of: [{ type: "save" }]
    },
    {
      name: "comment",
      title: "Comment",
      type: "array",
      of: [{ type: "comment" }]
    },
  ]
}
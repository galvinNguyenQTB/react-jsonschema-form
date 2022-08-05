module.exports = {
  schema: {
    type: "array",
    title: "Tab",
    groups: [
      {
        type: "array",
        title: "Tab1",
        items: {
          type: "string",
          title: "Name",
          default: "lorem ipsum",
        },
      },
      {
        type: "array",
        title: "Tab2",
        items: {
          type: "string",
          title: "Name",
          default: "lorem ipsum",
        },
      },
    ],
  },
  uiSchema: {
    groups: [
      {
        items: {
          "ui:widget": "textarea",
        },
      },
    ],
  },
  formData: [["lorem"], ["dolor"]],
};

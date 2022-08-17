module.exports = {
  schema: {
    type: "object",
    title: "About Us",
    properties: {
      TeamDetails: {
        type: "array",
        title: "Member Info",
        groups: [{
          type: "array",
          title: "Team Color",
          items: [{
            type: "string",
            title: "Team Color",
          },
          ],
        }, {
          type: "array",
          title: "Members",
          items: [{
            type: "string",
            title: "Member 1:",
            minLength: 3,
          }, {
            type: "string",
            title: "Member 2:",
            minLength: 3,
          }, {
            type: "string",
            title: "Member 3:",
            minLength: 3,
          }, {
            type: "string",
            title: "Default password:",
            minLength: 10,
          }, {
            type: "string",
            title: "Kick-off date:",
            format: "date-time",
          },
          ],
        }, {
          type: "array",
          title: "Required Skills",
          items: [{
            type: "boolean",
            title: "React",
          }, {
            type: "boolean",
            title: "Java",
          }, {
            type: "boolean",
            title: "Typescript",
          },
          ],
        }, {
          type: "array",
          title: "Code Quality",
          items: [{
            type: "integer",
            title: "Test Coverage(%):",
            minimum: 70,
            maximum: 100,
          }, {
            type: "number",
            title: "Allow code smell maximum:",
            enum: [5, 10, 15],
          },
          ],
        },
        ],
      },
      TeamDescription: {
        type: "string",
        title: "Description",
        default:
          "A professional team. Our member are hard and smart-work.",
        minLength: 50,
      },
    },
  },
  uiSchema: {
    TeamDetails: {
      groups: [{
        items: {
          "ui:widget": "color",
        },
      }, {
        items: [{
          "ui:widget": "textarea",
        }, {
          "ui:widget": "textarea",
        }, {
          "ui:widget": "textarea",
        }, {
          "ui:widget": "password",
        },
        ],
      }, {
        items: {
          "ui:widget": "radio",
        },
      }, {
        items: [{
          "ui:widget": "range",
        }, {
          "ui:widget": "radio",
          "ui:options": {
            inline: true,
          },
        },
        ],
      },
      ]
    },
    TeamDescription: {
      "ui:widget": "textarea"
    }
  },
  formData: {
    TeamDetails: [
      ["#ff0000"],
      ["Jack", "John", "Jason", "P@ssw0rd!", "1999-07-01T00:00:00.000Z"],
      [true, true, true],
      [90, 15],
    ],
    TeamDescription: "A professional team. Our member are hard and smart-work.",
  },
};

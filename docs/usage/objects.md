# Objects

## Object properties

Objects are defined with a type equal to `object` and properties specified in the `properties` keyword.

```jsx
import validator from "@rjsf/validator-ajv6";

const schema = {
  "title": "My title",
  "description": "My description",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    }
  }
};

render((
  <Form schema={schema} validator={validator} />
), document.getElementById("app"));
```

## Required properties

You can specify which properties are required using the `required` attribute:

```jsx
import validator from "@rjsf/validator-ajv6";

const schema = {
  "title": "My title",
  "description": "My description",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    }
  },
  "required": ["name"]
};

render((
  <Form schema={schema} validator={validator} />
), document.getElementById("app"));
```

## Specifying property order

Since the order of object properties in Javascript and JSON is not guaranteed, the `uiSchema` object spec allows you to define the order in which properties are rendered using the `ui:order` property:

```jsx
import validator from "@rjsf/validator-ajv6";

const schema = {
  type: "object",
  properties: {
    foo: {type: "string"},
    bar: {type: "string"}
  }
};

const uiSchema = {
  "ui:order": ["bar", "foo"]
};

render((
  <Form schema={schema} uiSchema={uiSchema} validator={validator} />
), document.getElementById("app"));
```

If a guaranteed fixed order is only important for some fields, you can insert a wildcard `"*"` item in your `ui:order` definition. All fields that are not referenced explicitly anywhere in the list will be rendered at that point:

```js
const uiSchema = {
  "ui:order": ["bar", "*"]
};
```

## Additional properties

The `additionalProperties` keyword allows the user to add properties with arbitrary key names. Set this keyword equal to a schema object:

```jsx
import validator from "@rjsf/validator-ajv6";

const schema = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    }
  },
  "additionalProperties": {
    "type": "number",
    "enum": [1, 2, 3]
  }
};

render((
  <Form schema={schema} validator={validator} />
), document.getElementById("app"));
```

In this way, an add button for new properties is shown by default.

You can also define `uiSchema` options for `additionalProperties` by setting the `additionalProperties` attribute in the `uiSchema`.

### `expandable` option

You can turn support for `additionalProperties` off with the `expandable` option in `uiSchema`:

```js
const uiSchema = {
  "ui:options":  {
    expandable: false
  }
};
```

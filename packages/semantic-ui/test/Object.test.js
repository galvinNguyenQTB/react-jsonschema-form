import React from "react";
import validator from "@rjsf/validator-ajv6";
import renderer from "react-test-renderer";

import Form from "../src/index";

describe("object fields", () => {
  test("object", () => {
    const schema = {
      type: "object",
      properties: {
        a: { type: "string", title: "A" },
        b: { type: "number", title: "B" },
      },
    };
    const tree = renderer
      .create(<Form schema={schema} validator={validator} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("additionalProperties", () => {
    const schema = {
      type: "object",
      additionalProperties: true,
    };
    const tree = renderer
      .create(
        <Form schema={schema} validator={validator} formData={{ foo: "foo" }} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

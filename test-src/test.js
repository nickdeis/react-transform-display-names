import assert from "assert";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

it("Test to make sure react-transform-display-names works", () => {
  class TestPureComponent extends React.PureComponent {
    render() {
      return <div>Hello World</div>;
    }
  }

  class TestComponent extends React.Component {
    render() {
      return <div>Hello World</div>;
    }
  }

  assert.equal(
    TestPureComponent.displayName,
    "TestPureComponent",
    "expected TestComponent.displayName to be TestComponent"
  );
  assert.equal(
    TestComponent.displayName,
    "TestComponent",
    "Expected TestComponent.displayName to be TestComponent"
  );
  assert.equal(
    renderToStaticMarkup(<TestPureComponent />),
    "<div>Hello World</div>"
  );
});

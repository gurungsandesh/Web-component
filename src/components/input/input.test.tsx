import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Input from "./input";

const props = {
  id: 'test',
  label: 'test',
  type: 'test',
  value: "test",
  name: 'test'
}

describe("Render input properly", () => {
  test("Focus input on clicking label", () => {
    render(<Input label={props.label} type={props.type} name={props.name} />);
  })
  test("Renders label correctly", () => {
    render(<Input label={props.label} type={props.type} name={props.name} />);
  })

  test("Renders Input with value", () => {
    render(<Input label={props.label} type={props.type} name={props.name} />);
  })

  test("Renders Input with default value", () => {
    render(<Input label={props.label} type={props.type} name={props.name} />);
  })

  test("Renders disabled input", () => {
    render(<Input label={props.label} type={props.type} name={props.name} />);
  })

  test("Renders Input with value", () => {
    render(<Input label={props.label} type={props.type} name={props.name} />);
  })

  test("Renders Multiline Input", () => {
    render(<Input label={props.label} type={props.type} name={props.name} />);
  })

});

import React, {memo} from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { deprecatedComponent } from "../src/Deprecated";

const SampleConstComponent = () => {
  return null
}

const SampleConstComponentWithProps = ({}:{attribute: string, method(parameter: string): void}) => {
  return null
}

function SampleFunctionComponent() {
  return null
}

class SampleClassComponent  extends React.Component<any , any> {
  render() {
    return null
  }
}

describe('Deprecated', () => {
  const consoleWarnSpy = jest.spyOn(global.console, 'warn')
  const reason = 'some reason to deprecate something';

  beforeEach(() => {
    consoleWarnSpy.mockClear()
  })

  it('shows the warning on console with function component', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, SampleFunctionComponent)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`${SampleFunctionComponent.name} was deprecated: ${reason}`)
  });

  it('shows the warning on console with const component', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, SampleConstComponent)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`${SampleConstComponent.name} was deprecated: ${reason}`)
  });

  it('shows the warning on console with class component', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, SampleClassComponent)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`${SampleClassComponent.name} was deprecated: ${reason}`)
  });

  it('shows the warning on console with anonymous function component', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, () => null)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`Anonymous function was deprecated: ${reason}`)
  });

  it('shows the warning on console with memoized component', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, memo(() => null))

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`Anonymous function was deprecated: ${reason}`)
  });

  it('shows the warning on console with memoized component', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, SampleConstComponentWithProps)

    render(<DeprecatedComponent attribute="" method={_ => {}}  />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`SampleConstComponentWithProps was deprecated: ${reason}`)
  });
});

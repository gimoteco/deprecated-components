import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { deprecatedComponent } from "Deprecated";

const SampleConstComponent = () => {
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

  it('shows the warning on console', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, SampleFunctionComponent)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`${SampleFunctionComponent.name} was deprecated: ${reason}`)
  });

  it('shows the warning on console', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, SampleConstComponent)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`${SampleConstComponent.name} was deprecated: ${reason}`)
  });

  it('shows the warning on console', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, SampleClassComponent)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`${SampleClassComponent.name} was deprecated: ${reason}`)
  });

  it('shows the warning on console', () => {
    const DeprecatedComponent =  deprecatedComponent(reason, () => null)

    render(<DeprecatedComponent />)

    expect(consoleWarnSpy).toHaveBeenCalledWith(`Anonymous function was deprecated: ${reason}`)
  });
});

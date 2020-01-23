import { ComponentType } from "react";

export function deprecatedComponent(reason: string, DeprecatedComponent: ComponentType<any>) {
    const message = `${DeprecatedComponent.name || 'Anonymous function' } was deprecated: ${reason}`
    console.warn(message)
    return DeprecatedComponent
}

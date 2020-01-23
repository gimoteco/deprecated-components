import { ComponentType } from "react";

export function deprecatedComponent<Props>(reason: string, DeprecatedComponent: ComponentType<Props>) {
    const message = `${DeprecatedComponent.name || 'Anonymous function' } was deprecated: ${reason}`
    console.warn(message)
    return DeprecatedComponent
}

type BreakpointObjectType = {
    s?: string | number;
    m?: string | number;
    l?: string | number;
    xl?: string | number;
};
type BreakpointObjectKeysType = keyof BreakpointObjectType;
type BreakpointType = string | number | BreakpointObjectType;
type BreakpointsType = {
    mobile?: BreakpointType;
    tablet?: BreakpointType;
    desktop?: BreakpointType;
};
type BreakpointsKeysType = keyof BreakpointsType;
type ResponsivePropertyType = string | number | BreakpointsType;
export { BreakpointObjectType, BreakpointObjectKeysType, BreakpointType, BreakpointsType, BreakpointsKeysType, ResponsivePropertyType };

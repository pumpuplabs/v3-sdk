export declare const FACTORY_ADDRESS = "0x235a0f30B8D3338E5046b2e9cDb62E5ce498d3A1";
export declare const FACTORY_ADDRESS_MAP: {
    84532: string;
    1: string;
};
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0x4f157d8bc516d785f45049f8f9027de387954a1002431d9eac3d87b5f08a1976";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    LOWEST = 100,
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000,
    HIGHEST = 18000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};

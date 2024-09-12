export declare const FACTORY_ADDRESS = "0x434f93bc85e709C7c6760f1DfE793D35501EA671";
export declare const FACTORY_ADDRESS_MAP: {
    84532: string;
    1: string;
};
export declare const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
export declare const POOL_INIT_CODE_HASH = "0x1e85f501b45deb56047d2d981e42784125caf47d6c30afeaab8a2a9fc0498037";
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
    LOWEST = 100,
    LOW = 500,
    MEDIUM = 3000,
    HIGH = 10000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
    [amount in FeeAmount]: number;
};

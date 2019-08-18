import { compute } from './compute';

describe('compute', () => {
    it('should return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });
});

describe('compute', () => {
    it('should return 1 if input is 0', () => {
        const result = compute(0);
        expect(result).toBe(1);
    });
});

describe('compute', () => {
    it('should return 5 if input is 4', () => {
        const result = compute(4);
        expect(result).toBe(5);
    });
});

describe('compute', () => {
    it('should return null if input is null', () => {
        const result = compute(null);
        expect(result).toBeNull();
    });
});

describe('compute', () => {
    it('should return undefined if input is undefined', () => {
        const result = compute(undefined);
        expect(result).toBeUndefined();
    });
});

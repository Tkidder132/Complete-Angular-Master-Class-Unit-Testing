import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('should have a length greater than 0', () => {
        const result = getCurrencies();
        expect(result.length > 0).toBe(true);
    });
});

describe('getCurrencies', () => {
    it('should contain USD, EUR, and AUD', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});

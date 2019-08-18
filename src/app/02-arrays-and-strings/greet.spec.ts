import { greet } from './greet';

describe('greet', () => {
    it('should include undefined in the message', () => {
        const result = greet(undefined);
        expect(result).toContain('undefined');
    });
});

describe('greet', () => {
    it('should include null in the message', () => {
        const result = greet(null);
        expect(result).toContain('null');
    });
});

describe('greet', () => {
    it('should include Chris in the message', () => {
        const result = greet('Chris');
        expect(result).toContain('Chris');
    });
});

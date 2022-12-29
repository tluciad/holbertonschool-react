import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe('testing ./utils functions', () => {
    
    test('this must show the right year', () => {
        expect(getFullYear()).toBe('2022');
    });
    test('this must show the message: Holberton School when true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });
    test('this must show the message: Holberton School main dashboard when false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
    test('this must return the specific string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
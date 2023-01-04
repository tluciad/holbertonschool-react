import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('testing ./utils functions', () => {
    
    test('this must show the right year', () => {
        expect(getFullYear()).toEqual(2023);
    });
    test('this must show the message: Holberton School when true', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });
    test('this must show the message: Holberton School main dashboard when false', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
    test('this must return the specific string', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
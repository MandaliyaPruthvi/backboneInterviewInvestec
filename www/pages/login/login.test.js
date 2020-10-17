const { myview } = require('./login');

test('validatePassword username & password same', () => {
    expect(myview.validatePassword('Helo', 'Helo')).toBe('Username and Password cannot be same');
});

test('validatePassword only letters', () => {
    expect(myview.validatePassword('', 'dsdsdsdsasdsd')).toBe(true);
});

test('validatePassword password length', () => {
    expect(myview.validatePassword('', 'qwert')).toBe('Password must be atleast more than 8 characters');
});

test('validateUsername username repeated', () => {
    expect(myview.validateUsername('sssss')).toBe('No character can be repeated in a row for Username')
});

test('validateUsername username one capital', () => {
    expect(myview.validateUsername('dseqrty')).toBe('Username needs to have at least 1 capital letter')
});

test('validateUsername username less than 10', () => {
    expect(myview.validateUsername('dseqdsdsdsdsdsdrty')).toBe('Username should be less than or equal to 10 characters')
});


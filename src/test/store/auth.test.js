import auth from '../../store/auth'

describe('auth store tests', () => {
    it('should logout', () => {
        auth.logout();
        expect(auth.sessionUser).toBeFalsy();
    })
})
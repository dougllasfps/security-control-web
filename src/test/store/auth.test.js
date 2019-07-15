import { AuthStore } from '../../store/auth'
import AuthService from '../../app/service/authService';

jest.mock('../../app/service/authService')

AuthService.mockImplementation(() => {
    return{
        auth: () => {
            return { 
                data:{
                    user : {
                        name: 'foo bar',
                        username: 'foo',
                        email: 'foo@bar.com'
                    },
                    token: 'foo'
                }                
            }
        }
    }
})

describe('auth store tests', () => {

    const store = new AuthStore()

    it('should login', () => {
        store.login({username: 'foo', password: 'bar'})
        expect(store.sessionUser).toBeTruthy();
    })

    it('should logout', () => {
        store.logout();
        expect(store.sessionUser).toBeFalsy();
    })


})
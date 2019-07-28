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
    const user = {username: 'foo', password: 'bar'};

    it('should login', () => {
        store.login(user)
        expect(store.sessionUser).toBeTruthy();
    })

    it('should logout', () => {
        store.logout();
        expect(store.sessionUser).toBeFalsy();
    })

    it('should throw error on fail', () => {
        expect( () => store.login({}) ).toThrowError('')
    })


})
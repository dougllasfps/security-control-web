import AuthService from "../../app/service/authService";
import axios from 'axios';

jest.mock('axios');

const service = new AuthService();

test('should auth a user', () => {
    const user = {username: 'foo', password: 'bar'};
    const resp = {data: user};
    axios.post.mockResolvedValue(resp);
  
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
  
    return service.auth(user).then(data => expect(data).toEqual(resp))
  });
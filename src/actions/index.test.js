import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});
const mockResponse = {body:{bpi:'bitcoin price index'}};

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',mockResponse
)

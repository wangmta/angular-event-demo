import { VoterService } from './voter.service';

describe('VoterService', () => {
  let voterService: VoterService, mockHttp;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    // make sure for each test, it is using a fresh copy instance of VoterService, no state mutation
    voterService = new VoterService(mockHttp);
  });
});

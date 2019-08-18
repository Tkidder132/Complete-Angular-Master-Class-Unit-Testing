import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
    voteComponent.totalVotes = 0;
  });

  it('should raise voteChanged event when upvoted', () => {
    voteComponent.voteChanged.subscribe(event => {});
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('should not be null when upvoted', () => {
    voteComponent.voteChanged.subscribe(event => {});
    voteComponent.upVote();
    expect(voteComponent.totalVotes).not.toBeNull();
  });
});

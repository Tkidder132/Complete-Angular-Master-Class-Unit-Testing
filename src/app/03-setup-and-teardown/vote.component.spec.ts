import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  const component = new VoteComponent();

  beforeEach(() => {
    component.totalVotes = 0;
  });

  it('should increase total votes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should increase 10 times when upvoted 10 times', () => {
    for (let i = 0; i < 10; i++) {
      component.upVote();
    }
    expect(component.totalVotes).toBe(10);
  });

  it('should not decrease total votes when value is 0 and downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(0);
  });

  it('should decrease total votes when value is greater than 0 and downvoted', () => {
    component.upVote();
    component.downVote();
    expect(component.totalVotes).toBe(0);
  });
});

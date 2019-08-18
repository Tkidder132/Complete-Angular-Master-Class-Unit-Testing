import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  it('should increase total votes when upvoted', () => {
    const component = new VoteComponent();
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('should not decrease total votes when value is 0 and downvoted', () => {
    const component = new VoteComponent();
    component.downVote();
    expect(component.totalVotes).toBe(0);
  });

  it('should decrease total votes when value is greater than 0 and downvoted', () => {
    const component = new VoteComponent();
    component.upVote();
    component.downVote();
    expect(component.totalVotes).toBe(0);
  });
});

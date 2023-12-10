import { FibonnaciPipePipe } from './fibonnaci-pipe.pipe';

describe('FibonnaciPipePipe', () => {
  it('create an instance', () => {
    const pipe = new FibonnaciPipePipe();
    expect(pipe).toBeTruthy();
  });
});

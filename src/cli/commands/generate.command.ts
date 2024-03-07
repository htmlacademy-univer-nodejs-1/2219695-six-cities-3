import {Command} from './command.interface';

export class GenerateCommand implements Command {
  public getName(): string {
    return '--generate';
  }

  public execute(...parameters) {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);
  }
}

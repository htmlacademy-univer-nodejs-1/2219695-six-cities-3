import {Command} from './command.interface';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]) {
    console.log(parameters);
  }
}

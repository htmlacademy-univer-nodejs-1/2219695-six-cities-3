import convict from 'convict';

export type RestSchema = {
  PORT: number;
}

export const configRestSchema = convict<RestSchema>({
  PORT: {
    doc: 'Port for incoming connection',
    format: 'port',
    env: 'PORT',
    default: 4000
  },
});
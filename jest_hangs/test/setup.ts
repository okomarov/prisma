import path from 'path';
import {
  DockerComposeEnvironment,
  Wait,
  StartedDockerComposeEnvironment,
} from 'testcontainers';

let environment: StartedDockerComposeEnvironment;

beforeAll(async () => {
  const composeFilePath = path.resolve(__dirname, '../dev');
  const composeFile = 'docker-compose.yml';

  environment = await new DockerComposeEnvironment(composeFilePath, composeFile)
    .withWaitStrategy('postgres_1', Wait.forHealthCheck())
    .up();
});

afterAll(async () => {
  await environment.down();
});

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

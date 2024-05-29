import { readdirSync } from 'fs';
import { dirname, join } from 'path';

import { CreateNodes, CreateNodesContext } from '@nx/devkit';

export const createNodes: CreateNodes = [
  '**/tsconfig.json',
  (configFilePath: string, _options: unknown, context: CreateNodesContext) => {
    const projectRoot = dirname(configFilePath);

    const siblingFiles = readdirSync(join(context.workspaceRoot, projectRoot));

    if (!siblingFiles.includes('project.json')) {
      return {};
    }

    return {
      projects: {
        [projectRoot]: {
          targets: {
            'types-check': {
              command: 'echo "foo"',
            },
          },
        },
      },
    };
  },
];

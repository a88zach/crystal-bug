# CrystalBug

## Steps to reproduce bug

1. Install deps
   ```bash
   $ yarn
   ```
1. Reset nx
   ```bash
   $ yarn exec nx reset
   ```
1. Show project

   ```bash
   $ yarn exec nx show project test-app-1

    NX   Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it. See errors below.

    Failed to process project graph. Run "nx reset" to fix this. Please report the issue if you keep seeing it.
    The "@nx/jest/plugin" plugin threw an error while creating nodes from libs/test-lib-1/jest.config.ts:
        Error: Jest: Failed to parse the TypeScript config file /Users/zachtindall/Documents/repos/crystal-bug/libs/test-lib-1/jest.config.ts
        TSError: ⨯ Unable to compile TypeScript:
        libs/test-lib-1/jest.config.ts(8,7): error TS2451: Cannot redeclare block-scoped variable '_default'.

            at readConfigFileAndSetRootDir (/Users/zachtindall/Documents/repos/crystal-bug/node_modules/jest-config/build/readConfigFileAndSetRootDir.js:116:13)
            at processTicksAndRejections (node:internal/process/task_queues:95:5)
            at async readInitialOptions (/Users/zachtindall/Documents/repos/crystal-bug/node_modules/jest-config/build/index.js:403:13)
            at async readConfig (/Users/zachtindall/Documents/repos/crystal-bug/node_modules/jest-config/build/index.js:147:48)
            at async buildJestTargets (/Users/zachtindall/Documents/repos/crystal-bug/node_modules/@nx/jest/src/plugins/plugin.js:78:20)
            at async Array.exports.createNodes (/Users/zachtindall/Documents/repos/crystal-bug/node_modules/@nx/jest/src/plugins/plugin.js:60:32)
            at async /Users/zachtindall/Documents/repos/crystal-bug/node_modules/nx/src/project-graph/plugins/utils.js:49:27
            at async Promise.all (index 1)
            at async runCreateNodesInParallel (/Users/zachtindall/Documents/repos/crystal-bug/node_modules/nx/src/project-graph/plugins/utils.js:66:5)
            at async Promise.all (index 3)
   ```

1. Remove the custom plugin from nx.json

1. Reset nx
   ```bash
   $ yarn exec nx reset
   ```
1. Show project
   ```bash
   $ yarn exec nx show project test-app-1
   ```

The jest plugin only errors when there is a custom plugin also registered.

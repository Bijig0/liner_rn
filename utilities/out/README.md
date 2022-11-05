Generated source maps are placed into the out folder.

This allows the VSCode debugger to work with typescript files

When you want to debug a utility file, 

1. cd into /utilities

2. tsc or tsc --watch

This will generate the sourcemap into the out folder

3. run the current file node debugger on the typescript file

:)
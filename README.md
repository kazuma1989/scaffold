# scaffold

Copy any GitHub repo contents as a scaffold.

## Usage

```bash
npx @kazuma1989/scaffold <username>/<repo> [subdir]
```

Requirements: Node.js (including npx)

### Example

```bash
% npx @kazuma1989/scaffold kazuma1989/scaffold-react react-parcel
% ls -1A
.gitignore
.prettierrc
.vscode
package-lock.json
package.json
src
tsconfig.json
```

You can now run `npm install && npm start` to start serving a web app.

The contents are not cloned but just downloaded, so:

```bash
% git status
fatal: not a git repository (or any of the parent directories): .git
```

## Limitations (open issues to feature request)

- Scaffold repo must be public.
- The target branch must be "master".
- There is no way to use sub directories as a scaffolding root.
- No replacement for interpolation syntax.
- No updating method (Caution! The command overwrites existing files!)

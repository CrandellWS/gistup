# Gistup
## The Cross-platform Commandline Gist Uploader

Create and upload a Gist from the command line on Windows, Mac, and Linux! Then just use git as normal to update it.

Simply goto the directory you want to upload as a Gist and type `gistup *` and your done. Just want to create an empty Gist with repository access goto to your empty directory and enter the command `gistup`. Prefer to only use a single file in a directory, say index.html just type `gistup index.html`

Then you can view the results as a [Block like this](http://bl.ocks.org/mbostock) :+1:, For more information, read the tutorial: [Let’s Make a Block](http://bost.ocks.org/mike/block/) and see what you can make.

This update of https://github.com/mbostock/gistup includes several enhancements include ablity to create Gists using Windows cmd.exe, Powershell, MingW, Msys2 and many other BASH based terminals inlcuding to Linux and Mac terminals. 


## Installation

```bash
npm install -g gistup
```

The first time you run gistup, you’ll be prompted to create a GitHub *personal access token*. You can revoke the token in the future from your GitHub [application settings](https://github.com/settings/applications).

## Usage

To upload all files in the current directory to your new gist:

```bash
gistup
```

If you just want to create a gist from a single file, try this instead:

```bash
gistup index.html
```

If you specify any options, such as a private gist, you must separate files from options with a double-dash (--) like this:

```bash
gistup --private -- index.html index2.html
```

Or specify the files prior to any options such as

```bash
gistup index.html index2.html --private
```

Additionally, wildcards are accepted to get all files in a directory:
```bash
gistup *
```

```bash
gistup -- *
```

If you want to update your gist later, just use git:

```bash
edit index.html
git commit -m 'Made some awesome changes.'
git push
```

Gistup works with binary files, too!

Arguments:

* --description, -m - provide an optional description
* --interactive, -i - request confirmation of every file before adding
* --exclude, -x - skip files matching pattern; may use wildcards
* --private, --no-public - make a secret gist
* --open [url] - specify the URL to open after creating the gist
* --no-open - don’t open the created gist in your web browser when done
* --remote - specify the name of the git remote
* --repo - specify that a repo should be created in the current directory
* --help - show some help
* --version - print the current version of gistup

Gistup comes bundled with two helper programs: `gistup-rename` and `gistup-open`. Use `gistup-rename "description of gist"` to update the description of the gist in the current directory and `gistup-open` to open it for viewing in your default browser.

## Git config

Gistup will allow you to apply Git configuration options to your Gist as desired. Configuration option will be applied when provided as exampled in the .gistup.json file located in your home directory after your first run it should be auto generated after you provide the *personal access token*.

```json
{
  "token": "X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0",
  "open": "xdg-open",
  "gitConfigs": []
}
```

### Example Configuration
For example this would apply `color.ui false` and `core.autocrlf false` to your Gists.
```json
{
  "token": "X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0",
  "open": "open",
  "gitConfigs": [
    "color.ui false",
    "core.autocrlf false"
  ]
}
```
The `open` setting should be set to `xdg-open`, `open`,  or `start` depending on your OS (Linux), (Mac | Linux), (Win) respectively.  

## Troubleshooting

If you see the following error:

```
Error: Command failed: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

You probably need to [generate your SSH keys](https://help.github.com/articles/generating-ssh-keys) for GitHub. These keys give you permission to git push to your repositories, including Gists.

If you’re unable to follow the first-time setup to create a personal access token, you can [create a new access token](https://github.com/settings/tokens/new) by hand. The only required permission is "gist". You can then create a .gistup.json file in your home directory, with the following contents:

```json
{
  "token": "X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0X1x0"
}
```

Replace the numbers 0123456789… with your access token and save.

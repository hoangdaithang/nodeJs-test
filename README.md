Event 

A nice project with a events

---
## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.19.0

    $ npm --version
    6.13.4

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/thanghd-dev/nodeJs-test.git
    $ cd nodeJs-test
    $ npm install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

## Running the project

    $ npm start
## add .env

# Mongodb
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB_NAME=YOUR_MONGO_DB_NAME
MONGO_DB_USER=YOUR_MONGO_DB_USER
MONGO_DB_PASS=YOUR_MONGO_DB_PASS

NODE_ENV=local
jwtSecret=SVhhTT1jZKbH1JbpQDv2
jwtExpiredIn=7 days

# Flask + React App Starter

Based on a [Glitch.com](https://glitch.com) [experiment](https://glitch.com/edit/#!/hello-react-flask).

## Setup Instructions

1. If missing, install Python 3 [directly](https://www.python.org/downloads/) or via [PyEnv](https://github.com/pyenv/pyenv#getting-pyenv). Make sure you have `venv` and `pip3` available.
2. If missing, install [node.js](https://nodejs.org/en/download).
3. Run `python3 -m venv ./.venv` (set up a local virtual environment of Python).
4. Run `source ./.venv/bin/activate` (enable the local virtual environment of Python).
5. Run `pip install -r ./requirements.txt` to set up initial Python dependencies
6. Run `npm install` to set up initial JavaScript dependencies.
7. Run `npm run build` and then `npm run serve` to test the server.
8. For development with live reloading, run (from two different terminals):
   1. `npm start` - to run frontend server using Vite
   2. `npm run server` - to run backend server

## Development Notes

- When developing with the Vite dev server (`npm start`), make sure to add new backend routes to the vite.config.js proxy configuration.

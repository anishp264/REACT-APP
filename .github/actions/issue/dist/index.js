/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 264: /***/ module => {
      module.exports = eval("require")("@actions/core");

      /***/
    },

    /***/ 337: /***/ module => {
      module.exports = eval("require")("@actions/github");

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __nccwpck_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ var threw = true;
    /******/ try {
      /******/ __webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete __webpack_module_cache__[moduleId];
      /******/
    }
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat */
  /******/
  /******/ if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    const core = __nccwpck_require__(264);
    const github = __nccwpck_require__(337);

    try {
      const token = core.getInput("token");
      const title = core.getInput("title");
      const body = core.getInput("body");
      const assignees = core.getInput("assignees");

      const octokit = new github.GitHub(token);
      const response = octokit.issues.create({
        /*owner: github.context.repo.owner,
        repo: github.context.repo.repo,*/
        //below same as above two lines => javascript es6 spreading the github.context.repo
        ...github.context.repo,
        title,
        body,
        assignees: assignees ? assignees.split("\n") : undefined
      });
    } catch (error) {
      core.setFailed(error.message);
    }
  })();

  module.exports = __webpack_exports__;
  /******/
})();
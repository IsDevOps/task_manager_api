const asynWrapper = (fnc) => {
  return async (req, res, next) => {
    try {
      await fnc(req, res, next);
    } catch (error) {
      next();
    }
  };
};
module.exports =asynWrapper
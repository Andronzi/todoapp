function handleError(res, status, err) {
  return res
    .status(status)
    .json({ status: status, error: err.toString(), stack: err.stack });
}

function handleAnswer(res, status, answer) {
  return res.status(status).json(answer);
}

export { handleError, handleAnswer };

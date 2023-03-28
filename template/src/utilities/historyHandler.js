var navigate

function initHistory(useNavigate) {
  if (useNavigate) {
    navigate = useNavigate
  }
}

function setHistory(path, state = {}) {
  if (navigate) {
    navigate(path, state)
  }
}
export { initHistory, setHistory }

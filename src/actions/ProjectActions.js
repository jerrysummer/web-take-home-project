import { ADD_PROJECT } from '../util/Constants';

const addProject = payload => {
  return {
    type: ADD_PROJECT,
    payload
  }
}

export {
  addProject
}
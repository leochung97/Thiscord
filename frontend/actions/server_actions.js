import * as APIUtil from '../util/server_api_util';
export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';

const receiveServers = servers => {
  return {
    type: RECEIVE_SERVERS,
    servers: servers
  };
};

const receiveServer = server => {
  return {
    type: RECEIVE_SERVER,
    server: server
  };
};

const removeServer = server => {
  return {
    type: REMOVE_SERVER,
    server: server
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors: errors
  };
};

export const fetchServers = () => dispatch => {
  return APIUtil.fetchServers()
    .then(servers => (dispatch(receiveServers(servers))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const fetchServer = serverId => dispatch => {
  return APIUtil.fetchServer(serverId)
    .then(server => (dispatch(receiveServer(server))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
};

export const createServer = server => dispatch => {
  return APIUtil.createServer(server)
    .then(server => {
      dispatch(receiveServer(server))
      return server.id
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const editServer = server => dispatch => {
  return APIUtil.editServer(server)
    .then(server => (dispatch(receiveServer(server))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};

export const deleteServer = serverId => dispatch => {
  return APIUtil.deleteServer(serverId)
    .then(server => (dispatch(removeServer(server))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ));
};